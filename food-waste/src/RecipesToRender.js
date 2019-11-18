import React from 'react';
import Recipes from './Recipes'
import Recipe from './components/Recipe';


class RecipesToRender extends React.Component{
    render() {
        return (
            Recipes.map( item =>
                <Recipe recipe={item} /> 
                )




        )
    }
}

export default RecipesToRender;