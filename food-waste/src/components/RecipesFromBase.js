import React from 'react';
import RecipeView from './RecipeView';

import {Grid} from 'semantic-ui-react'

export class RecipesFromBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
            .then(res => res.json())
            .then(obj => Object.values(obj))
            .then(allRecipes => this.setState({recipes: allRecipes}));
    }

    render() {
        return (<Grid>
            { this.state.recipes.map( item =>
            <Grid.Column width={8}><RecipeView recipe={item}/></Grid.Column>
            )}
            </Grid>)
    }}