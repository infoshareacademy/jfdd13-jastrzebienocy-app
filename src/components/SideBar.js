import React from 'react'
import styles from './SideBar.module.css'
import Heart from './Heart'
import { Icon, Dropdown } from 'semantic-ui-react'

const dropdownI = [
  {
    key: 'Wszystkie',
    text: 'Wszystkie',
    value: null
  },
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
    key: 'Kuchnia gruzińksa',
    text: 'Kuchnia gruzińksa',
    value: 'gruzińksa'
  },
  {
    key: 'Inna',
    text: 'Inna',
    value: 'Inna'
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
            width: '165px',
            marginLeft: '16px',
            backgroundColor: 'lightGrey'
          }}
          className={styles.Input}
          placeholder='Nazwa Potrawy ...'
          value={this.props.name}
          onChange={event => {
            this.props.onNameChange(event.target.value)
            // console.log(event)
          }}
        />
        <div className={styles.Product}>Produkt:</div>
        <input
          style={{
            borderRadius: '25px',
            width: '165px',
            marginLeft: '16px',
            backgroundColor: 'lightGrey'
          }}
          className={styles.Input}
          placeholder='Nazwa Produktu ...'
          value={this.props.products}
          onChange={event => {
            this.props.onProductsChange(event.target.value)
            // console.log(event)
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
              width: '165px',
              marginLeft: '16px',
              WebkitAppearance: 'media-volume-sliderthumb',
              borderRadius: '51px',
              height: '20px',
              backgroundColor: 'lightGrey'
            }}
            id='typeinp'
            type='range'
            min='0'
            max='2000'
            step='50'
            value={this.props.weight}
            onChange={event => {
              this.props.onWeigthChange(event.target.value)
              // console.log(event)
            }}
          />
        </div>
        <div className={styles.Category}>Kategoria:</div>
        <div className={styles.dropdown}>
          <Dropdown
            style={{
              borderRadius: '25px',
              width: '165px',
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
            onChange={(event, data) => {
              this.props.onCategoryChange(data.value)
            }}
          />
        </div>
        <br />
        <div className={styles.Favourites}>
          Ulubione <Heart onHeartClick={(e) => console.log(e)} />
        </div>
      </div>
    )
  }
}

export default SideBar
