import React from 'react'
import styles from './SideBar.module.css'
import Heart from './Heart'
import { Dropdown } from 'semantic-ui-react'

const dropdownI = [
  {
    key: 'Kuchnia włoska',
    text: 'Kuchnia włoska',
    value: 'włoska'
  },
  {
    key: 'Kuchnia azjatycka',
    text: 'Kuchnia azjatycka',
    value: 'azjatycka'
  },
  {
    key: 'Kuchnia polska',
    text: 'Kuchnia polska',
    value: 'polska'
  },
  {
    key: 'Kuchnia francuska',
    text: 'Kuchnia francuska',
    value: 'francuska'
  },
  {
    key: 'Kuchnia amerykańska',
    text: 'Kuchnia amerykańska',
    value: 'amerykańska'
  },
  {
    key: 'Kuchnia meksykańska',
    text: 'Kuchnia meksykańska',
    value: 'meksykańska'
  },
  {
    key: 'Kuchnia śródziemnomorska',
    text: 'Kuchnia śródziemnomorska',
    value: 'śródziemnomorska'
  },
  {
    key: 'Kuchnia gruzińska',
    text: 'Kuchnia gruzińska',
    value: 'gruzińska'
  },
  {
    key: 'Inna',
    text: 'Inna',
    value: 'zupa'
  }
]
class SideBar extends React.Component {
  state = {
    icon: 'search'
  }
  render() {
    return (
      <div className={styles.SideBar}>
        <div className={styles.Searching}>Wyszukaj:</div>
        <div className={styles.Name}>Nazwa:</div>
        <input
          style={{
            borderRadius: '25px',
            marginLeft: '16px',
            backgroundColor: 'lightGrey'
          }}
          className={styles.Input2}
          placeholder='Nazwa Potrawy ...'
          value={this.props.name}
          onChange={event => {
            this.props.onNameChange(event.target.value)

          }}
        />
        <div className={styles.Product}>Produkt:</div>
        <input
          style={{
            borderRadius: '25px',
            marginLeft: '16px',
            backgroundColor: 'lightGrey'
          }}
          className={styles.Input2}
          placeholder='Nazwa Produktu ...'
          value={this.props.products}
          onChange={event => {
            this.props.onProductsChange(event.target.value)

          }}
        />
        <div className={styles.Quantity}>
          Masa:{' '}
          <span className={styles.WeightDisplay}>{this.props.weight}</span>g
        </div>
        <div className={styles.inputSlide}>
          <input
            style={{
              padding: '7px 0',
              WebkitAppearance: 'media-volume-sliderthumb',
              borderRadius: '50px',
              height: '20px',
              backgroundColor: 'lightGrey'
            }}
            className={styles.Input3}
            id='typeinp'
            type='range'
            min='0'
            max='2000'
            step='50'
            value={this.props.weight}
            onChange={event => {
              this.props.onWeigthChange(event.target.value)

            }}
          />
        </div>
        <div className={styles.Category}>Kategoria:</div>
        <div className={styles.dropdown2}>
          <Dropdown
            style={{
              // margin: '0 auto',
              borderRadius: '25px',
              width: '85%',
              marginLeft: '16px',
              backgroundColor: 'lightGrey',
              textAlign: 'center'
            }}
            size='massive'
            placeholder='Kategoria'
            fluid
            selection
            clearable
            options={dropdownI}
            value={this.props.category}
            className={styles.Input4}
            onChange={(event, data) => {
              this.props.onCategoryChange(data.value)
            }}
          />
        </div>

        <div className={styles.Favourites}>
          Ulubione <Heart checked={this.props.favourites} onHeartClick={this.props.onFavouritesChange} />
        </div>
      </div>
    )
  }
}

export default SideBar
