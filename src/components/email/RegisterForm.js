import '../../components/helper.css';
import React from 'react'
import styles from '../RegisterForm.module.css'
import { RegisterSignIn } from './RegisterSignIn'
import { NavLink, Link } from 'react-router-dom'
import api from './api'
import { Formik } from "formik";
import * as Yup from "yup";
import "../helper.css";
import Logo from '..//logo-nav.png';

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
    .matches(/.+/, "Zły format hasła."),
  RepeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Powtórzone hasło się nie zgadza')
    .required('Niepoprawne hasło')
});

const TextInput = props => {
  const { name, errors, touched } = props;
  return (
    <div style={{ textAlign: 'center', }}>
      <input {...props} />
      <div style={{
        height: '2px',
        fontSize: '12px'
      }}>{errors[name] && touched[name] && errors[name]}</div>
    </div>
  );
};

export default class RegisterForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    err: '',
    errtest: ''
  }

  getMessage(code) {
    let msg = ''
    // console.log(code)
    switch (code) {
      case 'auth/email-already-in-use':
        msg = 'Email już jest przypisany!'
        break
      case 'auth/invalid-email':
        msg = 'Niepoprawny Emeil'
        break
      case 'auth/weak-password':
        msg = 'Twoje hasło musi posiadać przynajmniej 8 znaków'
        break
      case 'auth/email-already-in-use':
        msg = 'Sukces!'
        break
      default:
        msg = 'Wystąpił nieoczekiwany błąd'
    }
    console.log(msg)
    this.setState({ errtest: msg }, () => console.log(this.state.errtest))
  }

  render() {
    return (
      <div className={styles.BodyReg}>
        <div className={styles.LogoLogin}>
          <div className={styles.FoodTxt}>Powiedz nam, co masz w swojej lodówce, a my powiemy Ci, co masz z tym zrobić!</div>
        </div>
        <div className={styles.InnerBox}>
        <div className={styles.LogoReg}><img src={Logo}
          style={{
            width: '182px'
          }}
          alt={"Logo"} className={styles.logo} />
        </div>
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
                    <div className={styles.Input}>
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
                    <div className={styles.Input}>
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
                    <div className={styles.Input}>
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
                    <div className={styles.Input}>
                      <label></label>
                      <TextInput
                        type="password"
                        name="RepeatPassword"
                        placeholder="Powtórz hasło"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password2}
                        touched={touched}
                        errors={errors}
                      /> <p style={{
                        textAlign: 'center',
                        padding: '16px 0 0 0',
                        fontSize: '12px'
                      }}>{this.state.errtest}</p>
                    </div>
                  </div>
                  <div className={styles.LogBttn}>
                    <button style={{
                      borderRadius: '20px',
                      padding: '6px 26px',
                      backgroundColor: 'rgba(139,195,74, 0.8)'
                    }}
                      type='submit' >
                      Zarejestruj się
                                    </button>
                  </div>
                </form>)}

          </Formik>
          <p className={styles.MailParBelow}>
            Tworząc u Nas konto zgadzasz sie na naszą{' '}
            <Link to='/privacy' className={styles.footerLinks}>
              Politykę prywatności
            </Link>
          </p>
          <div className={styles.LoginPage}>
            Posiadasz już konto?{' '}
            <Link
              to='/Login'
              className={styles.Register2}
            >
              Zaloguj się!
            </Link>
          </div>
        </div>

        {this.state.err && (
          <p className={styles.AllRegister} style={{ color: 'red' }}>
            {this.state.err}
          </p>
        )}

      </div>
    )
  }
}
