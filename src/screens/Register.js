import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { Input, Button, Segment, Message, Form, Divider } from "semantic-ui-react";
import * as moment from 'moment';
import { register } from "../services/AuthService"

import * as Yup from "yup";

import styles from "./Register.module.css";

const FormInfoHeader = () => {
  return (
    <div style={{width:"80%"}} className="ui icon message">
      <div className="content">
        <div className="header">Witaj w formularzu rejestracji.</div>
        <p>
           Pola z <i className={styles.star}> * </i> są wymagane.
        </p>
      </div>
    </div>
  );
};

const imageRegEx = /^(http)?s?:?((\/)?(\/)?[^"'><;",()]*\.(?:png|jpg|jpeg|gif|png|svg))/;

const accountFormSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Min 5 znaków")
    .max(50, "Max 50 znaków!")
    .required("Pole wymagane!"),
  passwordRep: Yup.string()
    .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same")
    .required("Hasła muszą być takie same"),
  
  image: Yup.string().matches(imageRegEx, "Błędny format url"),
  name: Yup.string()
    .min(3, "Min 3 znaki!")
    .max(15, "Max 15 znaków")
    .required("Pole wymagane"),
  email: Yup.string()
    .max(100, "Za długi email")
    .email("Zły format email")
    .required("Pole wymagane!")
});

const TextInput = props => {
  const { name, errors, touched, labelform, tooltiptext, labelRequire } = props;
  return (
    <div>
      <label >
        <div style={{width:"80%"}} className={styles.tooltip}>
          {labelform}
          <span className={styles.star}>{labelRequire}</span>
    
        </div>
        <Input style={{width:"80%"}} {...props} error={errors[name] && touched[name]} />{" "}
      </label>
      <div className={styles.error}>
        {errors[name] && touched[name] && errors[name]}
      </div>
    </div>
  );
};

const Textarea = props => {
  const { name, errors, touched, labelform, tooltiptext } = props;
  return (
    <label>
      <div style={{width:"80%"}} className={styles.tooltip}>
        {labelform}
      
      </div>
      <div className="ui focus input">
        <textarea
          style={{
            minHeight: 200,
          
            resize: "none",
            width:"80%"
          }}
          {...props}
          error={errors[name] && touched[name]}
        />
      </div>
      <div className={styles.error}>
        {errors[name] && touched[name] && errors[name]}
      </div>
    </label>
  );
};

class Register extends React.Component {
  state = {
    btnLoading: false,
    btnDisabled: false,
    isMessageShown: false
  };

  showMessage = () => {
    this.setState({
      isMessageShown: true
    });
    setTimeout(() => {
      this.setState({
        isMessageShown: false
      });
    }, 7000);
  };

  render() {
    return (
      <div className={styles.registerBody}>
        <div className={styles.leftsideRegister}>
          <div className={styles.fixedPicture}></div>
        </div>
      <div className={styles.rightsideRegister}>
        <Segment style={{height:"auto"}}>
    
        <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            passwordRep: "",
            image: "",
            bio: "",
            joined: moment().format('L')
          }}
          validationSchema={accountFormSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            
            this.setState({ btnLoading: true, btnDisabled: true });

            const {email, password, name, bio, joined} = values
            register(email, password, name, bio, joined)

            setTimeout(() => {
              resetForm();
              this.setState({ btnLoading: false, btnDisabled: false });
              this.showMessage();
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => {
            return (
              <div className={styles.addForm}>
                <FormInfoHeader />
                <form onSubmit={handleSubmit}>
                  <TextInput
                    labelform="Email"
                    labelRequire="*"
                    tooltiptext="Tutaj wpisz swój mail"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    touched={touched}
                    errors={errors}
                  />

                  <TextInput
                    labelform="Name"
                    labelRequire="*"
                    tooltiptext="Podaj swoje imię"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    touched={touched}
                    errors={errors}
                  />
                  <TextInput
                    labelform="Hasło"
                    labelRequire="*"
                    tooltiptext="Podaj hasło."
                    type="password"
                    name="password"
                    placeholder="Hasło"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    touched={touched}
                    errors={errors}
                  />
                  <TextInput
                    labelform="Powtórz hasło"
                    labelRequire="*"
                    tooltiptext="Powtórz hasło."
                    type="password"
                    name="passwordRep"
                    placeholder="Powtórz hasło"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordRep}
                    touched={touched}
                    errors={errors}
                  />
                  <TextInput
                    labelform="Zdjęcie profilowe"
                    tooltiptext="Podaj adres url swojego zdjecia profilowefgo."
                    type="file"
                    name="image"
                    placeholder="Zdjęcie profilowe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.image}
                    touched={touched}
                    errors={errors}
                  />
               
                  
                  <Textarea
                    className={"ui input"}
                    labelform="Bio"
                    tooltiptext="Napisz coś o sobie."
                    type="textarea"
                    name="bio"
                    placeholder="Bio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bio}
                    touched={touched}
                    errors={errors}
                  />

                  <Button
                    style={{ marginTop: "10px" }}
                    className={styles.formBtn}
                    content="Zarejestruj"
                    type="submit"
                    loading={this.state.btnLoading}
                    disabled={this.state.btnDisabled}
                  />

                  <Message
                    success
                    hidden={!this.state.isMessageShown}
                    header="REJESTRACJA SIĘ POWIODŁA"
                  />
                </form>
              </div>
            );
          }}
        </Formik>
        <div className={styles.linkContainer}>
          <p>
           Masz już konto?
          </p>
          <Link to="/zaloguj">
            <Button content="Zaloguj się" icon="sign-in" size="big" />
          </Link>
        </div>
        </Segment>
      </div>
      </div>
      
    );
  }
}
export default Register;