import React from 'react';
import RecipeView from './RecipeView';

<<<<<<< HEAD:food-waste/src/components/RecipesFromBase.js
import { Grid } from 'semantic-ui-react';
=======
import {Grid} from 'semantic-ui-react';
import SideBar from './SideBar';

>>>>>>> master:src/components/RecipesFromBase.js

export class RecipesFromBase extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: []
		};
	}

	componentDidMount() {
		fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
			.then((res) => res.json())
			// Zamienione przez JK
			.then((object) =>
				Object.keys(object).map((key) => {
					object[key].id = key;
					return object[key];
				})
			)
			// .then((obj) => Object.values(obj))
			.then((allRecipes) => this.setState({ recipes: allRecipes }))
			//Dodane JK
			.then((data) => console.log(this.state.recipes));
	}

<<<<<<< HEAD:food-waste/src/components/RecipesFromBase.js
	render() {
		return (
			// Dodane JK div na razie
			<div>
				<Grid>
					{this.state.recipes.map((item) => (
						<Grid.Column width={8}>
							<RecipeView recipe={item} />
						</Grid.Column>
					))}
				</Grid>
			</div>
		);
	}
}
=======
    render() {
        return (
        <div style={{display: 'flex'}}>
             <div style={{background: 'grey', marginRight: '20px'}}><SideBar/></div>
        
        <Grid>
            { this.state.recipes.map( item =>
            <Grid.Column width={8} style={{}}><RecipeView recipe={item} /></Grid.Column>
            )}
            </Grid>
            </div>)
            
    }
}
>>>>>>> master:src/components/RecipesFromBase.js
