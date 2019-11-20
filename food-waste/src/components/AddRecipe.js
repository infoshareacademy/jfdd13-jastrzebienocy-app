// Helper styles for demo
import "./helper.css";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const regEx = /^[a-zA-Z ]*$/;



class AddRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          
        }
    }

   
   


    render(){
        return(

            <div className="HeaderAdd">
    <h1>
      Nowy przepis
    </h1>

    <Formik
      initialValues={{ name: "", category: "", description: "", products: "", cookingTime: "", weight: "", imageUrl: "", portions: "" }}
      onSubmit={(values, actions) => {
        fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json', {
            method: 'POST',
            body: JSON.stringify({ ...values})
        }).then(() => {
            actions.setSubmitting(false);
    })}}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required("Required")
          .matches(regEx, 'Możesz użyć tylko słów'),
        category: Yup.string(),
        description: Yup.string()
          .required("Required"),
        products: Yup.string()
        .required("Required"),
        cookingTime: Yup.number()
         .integer()
         .positive(),
        weight: Yup.number()
            .required("Required"),
        imageUrl: Yup.string()
            .url(),
        portions: Yup.number()
            .integer()
            .positive()

      })}

      className='FormClass'
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
          handleReset
        } = props;

        return (
          <form onSubmit={handleSubmit   }>
            <label htmlFor="name" style={{ display: "block" }}>
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

            
            <label htmlFor="category" style={{ display: "block" }}>
              Rodzaj kuchni
            </label>
            <input
              id="category"
              placeholder="Wybierz kuchnię"
              type="text"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.category && touched.category
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.category && touched.category && (
              <div className="input-feedback">{errors.name}</div>
            )}

            
            <label htmlFor="description" style={{ display: "block" }}>
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


            
            <label htmlFor="products" style={{ display: "block" }}>
              Produkt bazowy
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

          <label htmlFor="cookingTime" style={{ display: "block" }}>
              Czas przygotowania
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

            <label htmlFor="weight" style={{ display: "block" }}>
              Ilość
            </label>
            <input
              id="weight"
              placeholder="Podaj potrzebną ilość produktu"
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

            <label htmlFor="imageUrl" style={{ display: "block" }}>
              Zdjęcie
            </label>
            <input
              id="imageUrl"
              placeholder="Załącz zdjęcie gotowego dania"
              type="text"
              value={values.imageUrl}
              onChange={handleChange}
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

            <label htmlFor="portions" style={{ display: "block" }}>
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
            <div className='Buttons'>
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            </div>

            
          </form>
        );
      }}
    </Formik>

 
  </div>



        )




    }



}

export default AddRecipe;