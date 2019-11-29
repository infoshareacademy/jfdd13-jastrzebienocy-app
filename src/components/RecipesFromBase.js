import React from 'react'
import RecipeView from './RecipeView'
import firebase from '../firebase'
import { Grid, Pagination } from 'semantic-ui-react'
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
      favorites: false,
      pageItems: 4,
      activePage: 1
    }
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })


  componentDidMount () {
    watchRecipes(recipes => {
      this.setState({ recipes })
    })
  }

  // Filter for products and recipes.
  get filteredRecepies () {
    // Destructure state for the products option
    const { recipes, products, weight, category } = this.state

    // Condition function for showing filtered recipes
    if (products.length !== 0) {
      // returning of the recipes.
      console.log(products)
      return recipes.filter(recipe => {
        return recipe.products.includes(products.toLowerCase())
      })
    } else if (weight > 0) {
      return recipes.filter(recipe => {
        return recipe.weight <= weight
      })
    } else if (category === null) {
      return recipes
    } else if (category.length !== 0) {
      return recipes.filter(recipe => {
        console.log(category)
        // console.log(recipe.category)
        return recipe.category.includes(category)
      })
    }
    return recipes
  }

  render () {
    const {activePage, pageItems } = this.state
    console.log(activePage)
    const viewedRecipes = this.filteredRecepies.slice( (activePage -1) * pageItems ,activePage * pageItems )


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
        <Pagination  
        onPageChange={this.handlePaginationChange} 
        activePage={this.state.activePage} 
        totalPages={Math.ceil(this.filteredRecepies.length/this.state.pageItems)} 
        />
        <Grid style={{ width: '100%' }}>
          {viewedRecipes.map(item => (
            <Grid.Column key={item.id} width={8}>
              <RecipeView recipe={item} />
            </Grid.Column>
          ))}
         
        </Grid>
      </div>
    )
  }
}
