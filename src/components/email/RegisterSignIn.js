import React from 'react';
import { EmailPasswordForm } from './EmailPasswordForm';
import api from './api';
import styles from '..//RegisterForm.module.css';

export function RegisterSignIn() {
    return (<div className={styles.RegPage}>
        <h1 className={styles.Register}>Zaloguj się</h1>
        <EmailPasswordForm apiMethod={(email, password) => api.logIn(email, password)} />
        <h1 className={styles.Register}>Zarejestruj się</h1>
        <EmailPasswordForm apiMethod={(email, password) => api.register(email, password) } />
    </div>)
}

