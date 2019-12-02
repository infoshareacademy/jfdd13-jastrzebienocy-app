import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import api from './api';
import styles from '..//RegisterForm.module.css';
import { NavLink } from 'react-router-dom';
import {Link} from "react-router-dom";

export function RegisterSignIn() {
    return (<div className={styles.RegPage}>
        <LoginForm apiMethod={(email, password) => api.logIn(email, password)} />
        <RegisterForm apiMethod={(email, password, name) => api.register(email, password, name) } />
    </div>)
}



{/* <form action="/action_page.php">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    <hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form> */}

// export function RegisterSignIn() {
//     return (<div className={styles.RegPage}>
//         <h1 className={styles.Register}>Zaloguj się</h1>
//         <EmailPasswordForm apiMethod={(email, password) => api.logIn(email, password)} />
//         <h1 className={styles.Register}>Zarejestruj się</h1>
//         <EmailPasswordForm apiMethod={(email, password) => api.register(email, password) } />
//     </div>)
// }