import React from 'react'
import RecipeView from './RecipeView'
import getTheRecipies from './GettingFromRecipies'

import { Grid } from 'semantic-ui-react'

export class RecipesFromBase extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recipes: []
    }
  }
  getTheRecipies()
  //   componentDidMount () {
  //   fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
  //     .then(res => res.json())
  //     // Zamienione przez JK
  //     .then(object =>
  //       Object.keys(object).map(key => {
  //         object[key].id = key
  //         return object[key]
  //       })
  //     )
  //     // było lecz jest  zakomentowane
  //     // .then((obj) => Object.values(obj))
  //     .then(allRecipes => this.setState({ recipes: allRecipes }))
  //     // Dodane JK
  //     .then(data => console.log(this.state.recipes))
  // }

  render () {
    return (
      // Dodane JK div na razie
      <div>
        <Grid>
          {this.state.recipes.map(item => (
            <Grid.Column width={8}>
              <RecipeView recipe={item} />
            </Grid.Column>
          ))}
		</Grid>
		<iniput ></iniput>
      </div>
    )
  }
}
