import '../../components/helper.css';
import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import api from './api'

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
