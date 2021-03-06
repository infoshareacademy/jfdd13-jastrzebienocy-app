import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navibar from './components/NaviBar';
import App from './App';
import MainContent from './screens/recipes/MainContent';
import  Profile  from './screens/profile/Profile';
import RegisterForm from './screens/register/RegisterForm';
import LoginForm from './screens/register/LoginForm';
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import { useAuth } from "./services/UseAuth";

const Root = () => {
    const loggedIn = useAuth()
    if (loggedIn === null) {
        return (<div></div>);
    }

    if (loggedIn) {
        return (
            <Router>
                <div>
                    <Navibar />
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/privacy" component={Privacy} />
                        <Route exact path="/RecipeView" component={MainContent} />
                        <Route exact path="/Profile" component={Profile} />
                        <Redirect exact path="/Login" to="/"></Redirect>
                        <Redirect exact path="/Register" to="/"></Redirect>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    } else {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/Register" component={RegisterForm} />
                        <Route exact path="/Login" component={LoginForm} />
                        <Route exact path="/privacy" component={Privacy} />
                        <Redirect to="/Login"></Redirect>
                    </Switch>
                </div>
            </Router>
        )
    }
};

export default Root;


