import React from 'react'
import styles from './RecipeView.module.css'
import { Segment, Image, Icon } from 'semantic-ui-react'
import Heart from './Heart'
import ModalWindow from './ModalWindow'
import { handleFavoritesFirebase } from '../services/HandleFavourites'

let portions = count => {
  let list = []
  for (let i = 0; i < count; i += 1) {
    list.push(<Icon key={i} name='user' size='large' />)
  }
  return list
}

class RecipeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  addToFavorites = (checked) => {
    handleFavoritesFirebase(this.props.recipe.id)
  }
  showModalWindow() {
    this.setState({ open: true })
  }
  closeWindow = () => {
    this.setState({
      open: false
    })
  }
  render() {
    return (
      <div className={styles.RecipeView}>
        <ModalWindow
          open={this.state.open}
          onCloseWindow={this.closeWindow}
          onClick={this.closeWindow}
          {...this.props.recipe}
        />
        <Segment className={styles.Wrapper}>
          <div className={styles.Heart}>
            <div>
              <Image
                src={this.props.recipe.imageUrl}
                className={styles.Img}
                style={{
                  width: 200,
                  height: 200,
                  objectFit: 'cover',
                  objectPosition: 'center',
                  cursor: 'pointer'
                }}
                size='medium'
                floated='left'
                onClick={() => {
                  this.showModalWindow()
                }}
              />
            </div>


            <div className={styles.Text}>

              <div className={styles.NameRecipe}>
                <p
                  onClick={() => {
                    this.showModalWindow()
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {this.props.recipe.name}
                </p>

              </div>
              <div
                onClick={() => {
                  this.showModalWindow()
                }}
                style={{ cursor: 'pointer' }}
                className={styles.ShortDescription}
              >
                <div>
                  {' '}
                  <p>Produkt bazowy: {this.props.recipe.products}</p>
                </div>
                <div>
                  {' '}
                  <p>Ilość: {this.props.recipe.weight} g</p>
                </div>
                <div>
                  {' '}
                  <p>Kuchnia: {this.props.recipe.category}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.TimeAndPortions}>
            <div>
              <Icon name='time' size='large' style={{ color: '#8BC34A' }} />
              {this.props.recipe.cookingTime} min
            </div>
            <div>{portions(this.props.recipe.portions || 1)}</div>{' '}
          </div>
          <div className={styles.HeartInRecipe}>
            <Heart checked={this.props.isFavourite} onHeartClick={this.addToFavorites} />
          </div>
        </Segment>

      </div>
    )
  }
}

export default RecipeView
