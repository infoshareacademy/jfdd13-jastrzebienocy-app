import React from 'react'
import styles from '..//RegisterForm.module.css'
import { RegisterSignIn } from './RegisterSignIn'
import { NavLink, Link } from 'react-router-dom'
import api from './api'
import { Formik } from "formik";
import * as Yup from "yup";

const accountFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Pole wymagane"),
  email: Yup.string()
    .max(100, "A długie hasło")
    .email("Niepoprawny Email!")
    .required("Pole wymagane"),
  password: Yup.string()
    .required("Pole wymagane")
    .min(8, "Wymagane minimum 8 znaków")
    .matches(/.+/, "Wrong password format."),
  RepeatPassword: Yup.string()
  .oneOf([Yup.ref('password'), null])
  .required('Niepoprawne hasło')
});

const TextInput = props => {
  const { name, errors, touched } = props;
  return (
    <div>
      <input {...props} />
      <div>{errors[name] && touched[name] && errors[name]}</div>
    </div>
  );
};

export default class RegisterForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    err: ''
  }

  getMessage(code) {
    console.log(code)
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Email już jest przypisany!'
      case 'auth/invalid-email':
        return 'Niepoprawny Emeil'
      case 'auth/weak-password':
        return 'Twoje hasło musi posiadać przynajmniej 8 znaków'
      default:
        return 'Wystąpił nieoczekiwany błąd'
    }
  }

  onSubmit = e => {
    e.preventDefault()
    api
      .register(this.state.email, this.state.password, this.state.name)
      .catch(err => this.setState({ err: this.getMessage(err.code) }))
  }

  render() {
    return (
      <div>
        <div className={styles.Register}>Utwórz konto</div>
        <div className={styles.InnerBox}>
          <p className={styles.MailPar}>
            Proszę wypełnić formularz w celu rejestracji.
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={accountFormSchema}
            onSubmit={(values, { setSubmitting }) => {
              api
                .register(values.email, values.password, values.name)
                .catch(err => this.setState({ err: this.getMessage(err.code) }))
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
                <form className={styles.Inputs} onSubmit={handleSubmit}>
                  <div className={styles.mailBox}>
                    <div>
                      <label></label>
                      <TextInput
                        type="name"
                        name="name"
                        placeholder="Nazwa użytkownika"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        touched={touched}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <label></label>
                      <TextInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        touched={touched}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <label></label>
                      <TextInput
                        type="password"
                        name="password"
                        placeholder="Hasło"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        touched={touched}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <label></label>
                      <TextInput
                        type="password"
                        name="RepeatPassword"
                        placeholder="powtórz hasło"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password2}
                        touched={touched}
                        errors={errors}
                      />
                    </div>
                  </div>
                  <button type='submit' >
                    Zarejestruj się
          </button>
                </form>)}
       
          </Formik>
          <p className={styles.MailParBelow}>
            Tworząc u Nas konto zgadzasz sie na naszą{' '}
            <Link to='/privacy' className={styles.footerLinks}>
              Politykę prywatności
            </Link>
          </p>

        </div>
        {this.state.err && (
          <p className={styles.AllRegister} style={{ color: 'red' }}>
            {this.state.err}
          </p>
        )}
        <div className={styles.LoginPage}>
          <div className={styles.Register2}>
            Posiadasz już konto?
            <Link
              activeClassName={'active-link'}
              to='/Login'
              className={styles.Register2}
              exact
            >
              Zaloguj się!
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
