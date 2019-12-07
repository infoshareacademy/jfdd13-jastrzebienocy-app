import React from 'react';
import styles from '../RegisterForm.module.css';
import { NavLink } from "react-router-dom";
import api from "./api";
import { Formik } from "formik";
import * as Yup from "yup";
import "../helper.css";
import Logo from '..//logo-nav.png';

const accountFormSchema = Yup.object().shape({
    email: Yup.string()
        .required("Pole wymagane")
        .max(100, "Za długie hasło")
        .email("Niepoprawny Email!"),
    password: Yup.string()
        .required("Pole wymagane")
        .matches(/.+/, "Zły format hasła")
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

export default class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
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
        e.preventDefault();
        console.log("zupa")
        api.logIn(this.state.email, this.state.password)
            .catch(err => this.setState({ err: err.message }));
    }

    render() {
        return (
            <div>
                <div className={styles.InnerBox}>
                <div className={styles.LogoLogin}>
                    <img  src={Logo} alt={"Logo"} className={styles.logo}/>
                    </div>
                    <p className={styles.MailPar}>
                        Proszę wypełnić pola do zalogowania.
              </p>
                    <Formik
                        initialValues={{
                            name: "",
                            password: "",

                        }}
                        validationSchema={accountFormSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values)
                            api
                                .logIn(values.email, values.password)
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
                                    </div>
                                    <button type='submit' >
                                        Zaloguj się
                                    </button>

                                </form>)}
                    </Formik>

                    <div className={styles.Register2}>
                        Nie posiadasz konta?
            <NavLink
                            activeClassName={'active-link'}
                            to='/Register'
                            className={styles.Register2}
                            exact
                        >
                            Zarejestruj się!
            </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
