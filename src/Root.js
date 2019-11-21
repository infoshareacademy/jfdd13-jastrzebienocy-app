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

import Footer from "./components/Footer";
import Privacy from "./components/Privacy"
import { RecipesFromBase } from './components/RecipesFromBase';

const Root = () => {
    return (
        <Router>
            <div>
                <Navibar/>
                <Switch>
                    <Route exact path="/" component={App} />
                    {/* <Route exact path="/privacy" component={Privacy} /> */}
                    {/* <Route exact path="/dashboard" component={Dashboard} />  */}
                    <Route exact path="/RecipeView" component={MainContent} />
                    {/* <Route exact path="/Profil" component={Profile}/>  */} 
                </Switch>
                <Footer/>
            </div>    
        </Router>    
    );
}; 

export default Root;


