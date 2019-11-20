import React from "react";
import styles from "./MainContent.module.css";
import AddRecipe from "./AddRecipe";
import {RecipesFromBase} from "./RecipesFromBase"
import {Icon} from 'semantic-ui-react';

class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = { displayAdd: false
          
        }
    }

    render() {
        return (
            <div className={styles.MainContent}>
            {/* <RecipesToRender/> */}
            <RecipesFromBase/>
            <Icon className={styles.plusButton} name="plus circle" size="huge" onClick={ () => this.setState({displayAdd: true})}/>
            {this.state.displayAdd && <AddRecipe />}
            

            </div>
        )
    }
}

export default MainContent;