import '../../components/helper.css';
import React from 'react';
import styles from '../RegisterForm.module.css';
import { NavLink } from "react-router-dom";
import api from "./api";
import { Formik } from "formik";
import * as Yup from "yup";
import "../helper.css";
import Logo from '../logo-nav.png';



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
        <div style={{ textAlign: 'center' }}>
            <input {...props} />
            <div style={{
                height: '2px',
                fontSize: '12px'
            }}>{errors[name] && touched[name] && errors[name]}</div>
        </div>
    );
};

export default class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
    }

    getMessage(code) {
        let msg = ''

        switch (code) {
            case 'auth/email-already-in-use':
                msg = 'Email już jest przypisany!'
                break
            case 'auth/wrong-password':
                msg = 'Niepoprawne hasło'
                break
            case 'auth/weak-password':
                msg = 'Twoje hasło musi posiadać przynajmniej 6 znaków'
                break
            default:
                msg = 'Wystąpił nieoczekiwany błąd'
        }

        this.setState({ errtest: msg }, () => console.log(this.state.errtest))
    }

    onSubmit = e => {
        e.preventDefault();

        api.logIn(this.state.email, this.state.password)
            .catch(err => this.setState({ err: err.message }));
    }

    render() {
        return (
            <div>
                <div className={styles.LogoLogin}>
                    <img src={Logo}
                        style={{
                            width: '100px',
                            marginLeft: '20px'
                        }}
                        alt={"Logo"} className={styles.logo} />
                    <div className={styles.FoodTxt}>Powiedz nam, co masz w swojej lodówce, a my powiemy Ci, co masz z tym zrobić!</div>
                </div>
                <div className={styles.InnerBox}>
                    <div className={styles.MailPar}>
                        <p>Proszę wypełnić pola do zalogowania.</p>
                    </div>
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
                                            /><p style={{ textAlign: 'center' }}>{this.state.errtest}</p>
                                        </div>
                                    </div>
                                    <div className={styles.LogBttn}>
                                        <button style={{
                                            borderRadius: '20px',
                                            padding: '6px 26px',
                                            backgroundColor: 'rgba(139,195,74, 0.8)'
                                        }}
                                            type='submit'  >
                                            Zaloguj się
                                    </button>
                                    </div>
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
                            &nbsp;  Zarejestruj się!
            </NavLink>
                    </div>
                </div>
            </div >
        )
    }
}
