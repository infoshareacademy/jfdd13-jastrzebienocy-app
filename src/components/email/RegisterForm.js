import React from 'react'
import styles from '..//RegisterForm.module.css'
import { RegisterSignIn } from './RegisterSignIn'
import { NavLink, Link } from 'react-router-dom'
import api from './api'
export default class RegisterForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        err: ''
    };

     getMessage (code) {
         console.log(code)
         switch (code) {
             case "auth/email-already-in-use": 
                return "Email już jest przypisany!";
             case "auth/invalid-email":
                return "Niepoprawny Emeil"
             case "auth/weak-password":
                 return "Twoje hasło musi posiadać przynajmniej 6 znaków"
             default: 
                return "Wystąpił nieoczekiwany błąd"
         }
     }
     

    onSubmit = e => {
        // console.log(api)

        e.preventDefault();
        api.register(this.state.email, this.state.password, this.state.name)
            .catch(err => this.setState({ err: this.getMessage(err.code) }));
        // this.props.apiMethod(this.state.email, this.state.password, this.state.name)
        //     .catch(err => this.setState({ err: err.message }));
        


    }

    render() {
        return (
            <div>
                <div className={styles.Register}>Utwórz konto</div>
                <div className={styles.InnerBox}>
                <p className={styles.MailPar}>Proszę wypełnić formularz w celu rejestracji.</p>
                <form className={styles.Inputs} onSubmit={this.onSubmit}>
                    <div className={styles.mailBox}>
                        <div>
                            <label>Imię:</label>
                            <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                        </div>
                        <div>
                            <label>Hasło: </label>
                            <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
                        </div>
                        <div>
                            <label>Powtórz Hasło: </label>
                            <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
                        </div>
                    </div>
                </form>
                <p className={styles.MailParBelow}>Tworząc u Nas konto zgadzasz sie na naszą <Link to="/privacy" className={styles.footerLinks} >Politykę prywatności</Link></p>


                <button type="submit" onClick={this.onSubmit}>Zarejestruj się</button>
                </div>
                {/* <RegisterSignIn></RegisterSignIn> */}
                {this.state.err && <p className={styles.AllRegister} style={{ color: 'red' }}>{this.state.err}</p>}
                <div className={styles.LoginPage}>
                    <div className={styles.Register2}>Posiadasz już konto?<Link activeClassName={"active-link"} to="/Login" className={styles.Register2} exact>Zaloguj się!</Link>
                    </div>
                </div>
            </div>


        )
    }
}
