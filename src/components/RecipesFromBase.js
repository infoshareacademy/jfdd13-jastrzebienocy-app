import React from 'react'
import RecipeView from './RecipeView'
import firebase from '../firebase'
import { Grid } from 'semantic-ui-react'
import SideBar from './SideBar'

import {
  fetchRecipes,
  prepareRecipes,
  watchRecipes
} from '../services/ForFetchDB'
import { bindExpression } from '@babel/types'
// import { removeTypeDuplicates } from '@babel/types'

export class RecipesFromBase extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recipes: [],
      products: '',
      weight: 0,
      category: '',
      favorites: false
    }
  }

  componentDidMount () {
    watchRecipes(recipes => {
      this.setState({ recipes })
    })
  }

  // Filter for products and recipes.
  get filteredRecepies () {
    // Destructure state for the products option
    const { recipes, products, weight, category } = this.state

    const finalData = recipes.filter(recipe => {
      const productsFilter =
        recipe.products &&
        recipe.products.toLowerCase().includes(products.toLowerCase())
      const weightFilter = weight ? Number(recipe.weight) <= weight : true
      const categoryFilter = category
        ? recipe.category.toLowerCase().includes(category.toLowerCase())
        : true

      return productsFilter && weightFilter && categoryFilter
    })
    return finalData
  }

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
        <Grid style={{ width: '100%' }}>
          {this.filteredRecepies.map(item => (
            <Grid.Column key={item.id} width={8}>
              <RecipeView recipe={item} />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    )
  }
}
