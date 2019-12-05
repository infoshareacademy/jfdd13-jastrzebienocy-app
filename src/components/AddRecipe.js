// src / components / email / RegisterForm.jsimport "./helper.css";
import React from "react";
import { Route } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal, Link, Button } from "semantic-ui-react";
import MainContent from "./MainContent";
import styles from "./AddRecipe.module.css";
import firebase, { storage } from "../firebase";
import { watchRecipes, unwatchRecipes } from "../services/ForFetchDB";

const regEx = /^[a-z\s\bąćśńółężź]{2,}$/i; // Modified JK
const options = [
  { value: "włoska", name: "Kuchnia włoska" },
  { value: "francuska", name: "Kuchnia francuska" },
  { value: "polska", name: "Kuchnia polska" },
  { value: "azjatycka", name: "Kuchnia azjatycka" },
  { value: "amerykańska", name: "Kuchnia amerykańska" },
  { value: "meksykańska", name: "Kuchnia meksykańska" },
  { value: "gruzińska", name: "Kuchnia gruzińska" },
  { value: "śródziemnomorska", name: "Kuchnia śródziemnomorska" },
  { value: "inna", name: "Inna" }
]

const SelectInput = props => {
  const { name, errors, touched, labelform, tooltiptext } = props;
  return (
    <div>
      <label>
        <div className={styles.selectCat}>{labelform}</div>
        <select
          style={{
            width: "100%",
            textAlignLast: "center",
            color: "grey",
            fontSize: "16px"
          }}
          className="ui selection dropdown"
          {...props}
          error={errors[name] && touched[name]}
        >
          {options.map((options) => <option value={options.value}>{options.name}</option>)}
        </select>
      </label>
    </div>
  );
};

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Nowy przepis</h1>

        <Formik
          onSuccess={() => {
            this.props.onSuccess();
          }}
          initialValues={{
            name: "",
            category: options[8].value,
            description: "",
            products: "",
            cookingTime: "",
            weight: "",
            imageUrl: "",
            portions: ""
          }}
          onSubmit={(values, actions) => {
            const data = Object.assign({}, { ...values });
            console.log(values);
            const image = values.imageSrc;
            if (image) {
              const imageName = image.name.replace(/\s/gi, "_");
              const uploadTask = storage.ref(`images/${imageName}`).put(image);
              uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                  console.log(error);
                },
                () => {
                  storage
                    .ref("images")
                    .child(imageName)
                    .getDownloadURL()
                    .then(url => {
                      console.log("url", url);
                      data.imageUrl = url;

                      firebase
                        .database()
                        .ref("/recipes")
                        .push(data);
                      this.props.onSuccess();
                    });
                }
              );
            } else {
              firebase
                .database()
                .ref("/recipes")
                .push(data);
              this.props.onSuccess();
              console.log('nowy przepis')
            }
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required("Pole jest wymagane!")
              .matches(
                regEx,
                "Możesz użyć tylko słów o minimalnej długości dwóch znaków"
              ),
            category: Yup.string(),
            description: Yup.string().required("Pole jest wymagane!"),
            products: Yup.string()
              .required("Pole jest wymagane!")
              .matches(
                regEx,
                "Możesz użyć tylko słów o minimalnej długości dwóch znaków"
              ),
            cookingTime: Yup.number()
              .typeError("Czas przygotowania podaj w minutach!")
              .integer()
              .positive(),
            weight: Yup.number()
              .typeError("Waga musi być cyfrą/liczbą!")
              .positive("Waga nie może być ujemna!")
              .required("Pole jest wymagane!"),

            imageUrl: Yup.string().url(),
            portions: Yup.number()
              .integer()
              .positive(),
            favourites: Yup.boolean() // Added JK
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              setFieldValue
            } = props;

            return (
              <form
                style={{
                  display: "block",
                  textAlign: "center",
                  margin: "0 auto",
                  maxWidth: "70%"
                }}
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="name"
                  style={{ display: "block", margin: "5px" }}
                >
                  Nazwa przepisu
                </label>
                <input
                  id="name"
                  placeholder="Wpisz nazwę przepisu"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}

                <label
                  htmlFor="products"
                  style={{ display: "block", margin: "5px" }}
                >
                  <p>Produkt bazowy</p>
                </label>
                <input
                  id="products"
                  placeholder="Podaj produkt bazowy"
                  type="text"
                  value={values.products}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.products && touched.products
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.products && touched.products && (
                  <div className="input-feedback">{errors.products}</div>
                )}

                <label
                  htmlFor="weight"
                  style={{ display: "block", margin: "5px" }}
                >
                  <p>Ilość w gramach</p>
                </label>
                <input
                  id="weight"
                  placeholder="Podaj potrzebną ilość produktu bazowego"
                  type="text"
                  value={values.weight}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.weight && touched.weight
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.weight && touched.weight && (
                  <div className="input-feedback">{errors.weight}</div>
                )}

                <label
                  htmlFor="description"
                  style={{ display: "block", margin: "5px" }}
                >
                  Opis
                </label>
                <input
                  id="description"
                  placeholder="Opisz swój przepis"
                  type="text"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.description && touched.description
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.description && touched.description && (
                  <div className="input-feedback">{errors.description}</div>
                )}

                <SelectInput
                  labelform="Rodzaj kuchni"
                  name="category"
                  placeholder="Wybierz rodzaj kuchni"
                  onChange={handleChange}
                  value={values.category}
                  touched={touched}
                  errors={errors}
                />

                <label
                  htmlFor="cookingTime"
                  style={{ display: "block", margin: "5px" }}
                >
                  Czas przygotowania w minutach
                </label>
                <input
                  id="cookingTime"
                  placeholder="Podaj czas przygotowania"
                  type="text"
                  value={values.cookingTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.cookingTime && touched.cookingTime
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.cookingTime && touched.cookingTime && (
                  <div className="input-feedback">{errors.cookingTime}</div>
                )}

                <label
                  htmlFor="imageUrl"
                  style={{ display: "block", margin: "5px" }}
                >
                  Zdjęcie
                </label>
                <input
                  id="imageUrl"
                  placeholder="Podaj adres URL zdjęcia gotowego dania"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={event => {
                    console.log("imageSrc", event.target.files[0]);
                    setFieldValue("imageSrc", event.target.files[0]);
                  }}
                  onBlur={handleBlur}
                  className={
                    errors.imageUrl && touched.imageUrl
                      ? "text-input error"
                      : "text-input"
                  }
                />

                {errors.imageUrl && touched.imageUrl && (
                  <div className="input-feedback">{errors.imageUrl}</div>
                )}

                <label
                  htmlFor="portions"
                  style={{ display: "block", margin: "5px" }}
                >
                  Porcje
                </label>
                <input
                  id="portions"
                  placeholder="Podaj liczbę porcji"
                  type="text"
                  value={values.portions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.portions && touched.portions
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.portions && touched.portions && (
                  <div className="input-feedback">{errors.portions}</div>
                )}

                <input
                  id="favorites"
                  type="text"
                  value={values.favorites}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.None}
                />

                <div className="Buttons">
                  <Button
                    color="black"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Wyczyść
                  </Button>
                  <Button color="green" type="submit" disabled={isSubmitting}>
                    Wyślij
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default AddRecipe;
