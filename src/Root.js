import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navibar from './components/NaviBar';
import App from './App';
import MainContent from './components/MainContent';
import Sidebar from './components/SideBar';
import RecipeView from './components/RecipeView';
import {Profile} from './components/Profile';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import { RecipesFromBase } from './components/RecipesFromBase';
import {RegisterSignIn} from './components/email/RegisterSignIn';
import Login from './screens/Login'
import Register from './screens/Register';

const Root = () => {
    return (
        <Router>
            <div>
                <Navibar/>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/privacy" component={Privacy} />
                    {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                    <Route exact path="/RecipeView" component={MainContent} />
                    <Route exact path="/Profile" component={Profile}/>
                    {/* <Route exact strict path="/RegisterForm" component={RegisterForm}/>
                    <Route exact strict path="/LoginForm" component={LoginForm}/> */}
                    <Route exact path="/RegisterSignIn" component={RegisterSignIn}/>
                    <Route exact path="/zaloguj" component={Login}/>
                    <Route exact path="/zarejestruj" component={Register}/>
                </Switch>
                <Footer/>
            </div>    
        </Router>    
    );
}; 

export default Root;


