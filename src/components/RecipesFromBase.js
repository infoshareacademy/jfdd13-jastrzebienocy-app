import React from 'react'
import RecipeView from './RecipeView'

import { Grid } from 'semantic-ui-react'
import SideBar from './SideBar'
import { fetchRecipes } from '../services/ForFetchDB'
import { removeTypeDuplicates } from '@babel/types'

export class RecipesFromBase extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recipes: [],
      products: '',
      weight: 0,
      category: '',
      showFavorites: false
    }
  }

  componentDidMount () {
    fetchRecipes().then(recipes => {
      console.log(recipes)
      this.setState({ recipes })
    })
  }

  //   componentDidMount () {
  //     fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
  //       .then(res => res.json())
  //       // Zamienione przez JK
  //       .then(object =>
  //         Object.keys(object).map(key => {
  //           object[key].id = key
  //           return object[key]
  //         })
  //       )
  //       // .then((obj) => Object.values(obj))
  //       .then(allRecipes => this.setState({ recipes: allRecipes }))
  //       // Dodane JK
  //       .then(data => console.log(this.state.recipes))
  //   }
  // Filter for products i recipes.
  get filteredRecepies () {
    // Destructure state for the products option
    const { recipes, products, weight, category } = this.state
    // Condition function for showing filtered recipes
    if (products.length !== 0) {
      // returning of the recipes.

      return recipes.filter(recipe => {
        console.log(products)
        return recipe.products.includes(products)
      })
    } else if (weight != 0) {
      return recipes.filter(recipe => {
        return recipe.weight > weight
      })
    } else if (category.length !== 0) {
      return recipes.filter(recipe => {
        console.log(recipe.category)

        return recipe.category.includes(category)
      })
    }
    return recipes
  }
  // possible put part of it to the first filter
  // get filterByWeigth () {
  //   const { recipes, weight } = this.state

  //   if (weight !== 0) {
  //     console.log(weight)

  //     return recipes.filter(recipe => {
  //       return recipe.weight > weight
  //     })
  //   }
  //   return recipes
  // }

  // get filterByCategory () {
  //   const { recipes, category } = this.state
  //   if (category.length !== 0) {
  //     return recipes.filter(recipe => {
  //       console.log(recipe.category)

  //       return recipe.category.includes(category)
  //     })
  //   }
  //   return recipes
  // }

  render () {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ background: 'grey', marginRight: '20px' }}>
          <SideBar
            products={this.state.products}
            onProductsChange={products => {
              this.setState({
                products
              })
            }}
            weigth={this.state.weight}
            onWeigthChange={weight => {
              this.setState({
                weight
              })
              console.log(this.state.weigth)
            }}
            category={this.state.category}
            onCategoryChange={category => {
              this.setState({
                category
              })
              console.log(category)
            }}
          />
        </div>

        <Grid>
          {this.filteredRecepies.map(item => (
            <Grid.Column width={8}>
              <RecipeView recipe={item} />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    )
  }
}
