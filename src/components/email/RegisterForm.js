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
        return 'Twoje hasło musi posiadać przynajmniej 6 znaków'
      default:
        return 'Wystąpił nieoczekiwany błąd'
    }
  }

  onSubmit = e => {
    console.log("guzik dolny")

    e.preventDefault()
    api
      .register(this.state.email, this.state.password, this.state.name)
      .catch(err => this.setState({ err: this.getMessage(err.code) }))
    // this.props.apiMethod(this.state.email, this.state.password, this.state.name)
    //     .catch(err => this.setState({ err: err.message }));
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
              // repeatPassword: "",
            }}
            validationSchema={accountFormSchema}
            onSubmit={(values, { setSubmitting }) => {
              api
                .register(values.email, values.password, values.name)
                .catch(err => this.setState({ err: this.getMessage(err.code) }))
              // setSubmitting(true);
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 2000);
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
              /* and other goodies */
            }) => (
                // <form onSubmit={handleSubmit}>
                <form className={styles.Inputs} onSubmit={handleSubmit}>
                  <div className={styles.mailBox}>
                    <div>
                      <label></label>
                      <TextInput
                        type="name"
                        name="name"
                        placeholder="Imię"
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
            {/* <form className={styles.Inputs} onSubmit={this.onSubmit}>
              <div className={styles.mailBox}>
                <div>
                  <label>Imię:</label>
                  <input
                    type='text'
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type='text'
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <div>
                  <label>Hasło: </label>
                  <input
                    type='password'
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
                <div>
                  <label>Powtórz Hasło: </label>
                  <input
                    type='password'
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
              </div>
            </form> */}
          </Formik>
          <p className={styles.MailParBelow}>
            Tworząc u Nas konto zgadzasz sie na naszą{' '}
            <Link to='/privacy' className={styles.footerLinks}>
              Politykę prywatności
            </Link>
          </p>

          {/* <button type='submit' onClick={this.onSubmit}>
            Zarejestruj się
          </button> */}
        </div>
        {/* <RegisterSignIn></RegisterSignIn> */}
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
