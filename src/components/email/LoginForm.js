import './helper';
import React from 'react';
import styles from '..//RegisterForm.module.css';
import { Link } from "react-router-dom";
import api from "./api";
import { Formik } from "formik";
import * as Yup from "yup";
import "../helper.css";
const accountFormSchema = Yup.object().shape({

    email: Yup.string()
        .required("Pole wymagane")
        .max(100, "A długie hasło")
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
        api.logIn(this.state.email, this.state.password)
            .catch(err => this.setState({ err: err.message }));
    }

    render() {
        return (
            <div>
                <div className={styles.Register}></div>
                <div className={styles.InnerBox}>
                    <p className={styles.MailPar}>
                        Proszę wypełnić pola do zalogowania.
              </p>
                    <Formik
                        initialValues={{
                            name: "",
                            password: "",
                            // repeatPassword: "",
                        }}
                        validationSchema={accountFormSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values)
                            api
                                .logIn(values.email, values.password)
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
            <Link
                            activeClassName={'active-link'}
                            to='/Register'
                            className={styles.Register2}
                            exact
                        >
                            Zarejestruj się!
            </Link>
                    </div>
                </div>
            </div>
        )
    }
}
