import React from 'react'
import RecipeView from './RecipeView'
import firebase from '../firebase'
import { Grid, Pagination } from 'semantic-ui-react'
import SideBar from './SideBar'
import styles from './RecipesFromBase.module.css'

import {
  fetchRecipes,
  prepareRecipes,
  watchRecipes
} from '../services/ForFetchDB'
// import { bindExpression } from '@babel/types'
// import { removeTypeDuplicates } from '@babel/types'

export class RecipesFromBase extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recipes: [],
      name: '',
      products: '',
      weight: 2000,
      category: '',
      favourites: false,
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
    const { recipes, products, weight, category, name, favourites } = this.state
    // console.log(name)
    // console.log(weight, recipes)
    const finalData = recipes.filter(recipe => {
      const productsFilter =
        recipe.products &&
        recipe.products.toLowerCase().includes(products.toLowerCase())
      const nameFilter =
        recipe.name && recipe.name.toLowerCase().includes(name.toLowerCase())
      const weightFilter = weight ? Number(recipe.weight) <= weight : true
      const categoryFilter = category
        ? recipe.category.toLowerCase().includes(category.toLowerCase())
        : true
      const favouritesFilter = favourites === true ? recipe.favourites : true
      // console.log(recipe.name)
      return (
        productsFilter &&
        nameFilter &&
        weightFilter &&
        categoryFilter && 
        favouritesFilter
      )
    })
    return finalData
  }

  render () {
    const { activePage, pageItems } = this.state
    console.log(activePage)
    const viewedRecipes = this.filteredRecepies.slice(
      (activePage - 1) * pageItems,
      activePage * pageItems
    )

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ background: 'grey', marginRight: '20px' }}>
          <SideBar
            name={this.state.name}
            onNameChange={name => {
              this.setState({ name })
              // console.log(this.state.name)
            }}
            products={this.state.products}
            onProductsChange={products => {
              this.setState({
                products
              })
            }}
            weight={this.state.weight}
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
              // console.log(category)
            }}
            favourites={this.state.favourites}
            onFavouritesChange={favourites => {
              this.setState({ favourites })
              // console.log(favourites)
            }}
          />
        </div>
        <>
          <Grid stackable relaxed style={{ width: '100%' }}>
            {viewedRecipes.map(item => (
              <Grid.Column key={item.id} width={8}>
                <RecipeView recipe={item} />
              </Grid.Column>
            ))}
          </Grid>
          <div className={styles.pagMiddle}>
            <Pagination
              onPageChange={this.handlePaginationChange}
              activePage={this.state.activePage}
              totalPages={Math.ceil(
                this.filteredRecepies.length / this.state.pageItems
              )}
            />
          </div>
        </>
      </div>
    )
  }
}
