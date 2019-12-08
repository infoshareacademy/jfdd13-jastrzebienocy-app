import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import api from './api'
import styles from '..//RegisterForm.module.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function RegisterSignIn() {
  return (
    <div>
      <LoginForm apiMethod={(email, password) => api.logIn(email, password)} />
      <RegisterForm apiMethod={(email, password, name) => api.register(email, password, name)
        }
      />
    </div>
  )
}
