import React from 'react'
import RecipeView from './RecipeView'
import { Grid, Pagination, GridRow } from 'semantic-ui-react'
import SideBar from './SideBar'
import styles from './RecipesFromBase.module.css'

import {
  getFavourites,
  prepareRecipes,
  watchRecipes,
  unwatchRecipes,
  categories
} from "../services/ForFetchDB";


export class RecipesFromBase extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      favs: {},
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
  unsubscribe = undefined;

  componentDidMount() {
    watchRecipes(recipes => {
      this.setState({ recipes });
    });
    this.unsubscribe = getFavourites((favs) => this.setState({ favs }))
  }

  componentWillUnmount() {
    unwatchRecipes()
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  get filteredRecepies() {
    const { recipes, products, weight, category, name, favourites } = this.state
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
      const favouritesFilter = favourites === true ? this.state.favs[recipe.id] : true
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

  render() {
    const { activePage, pageItems } = this.state
    const viewedRecipes = this.filteredRecepies.slice(
      (activePage - 1) * pageItems,
      activePage * pageItems
    )

    return (
      <div className={styles.layout}>
        <div className={styles.layout2}>
          <SideBar
            name={this.state.name}
            onNameChange={name => {
              this.setState({ name })
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
            }}
            favourites={this.state.favourites}
            onFavouritesChange={() => {
              this.setState({ favourites: !this.state.favourites })
            }}
          />
        </div>
        <>
          <Grid stackable relaxed style={{ width: '100%', marginTop: '0' }}>
            {viewedRecipes.map(item => (

              <Grid.Column key={item.id} width={8}>
                <RecipeView recipe={item} isFavourite={this.state.favs[item.id]} />
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
