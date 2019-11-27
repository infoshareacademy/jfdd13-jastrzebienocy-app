import React from 'react'
import styles from './SideBar.module.css'
import Heart from './Heart'
import { Icon } from 'semantic-ui-react'

import { Dropdown } from 'semantic-ui-react'
// const regEx = /^[a-z]$/i
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
  }
]
class SideBar extends React.Component {
  render () {
    return (
      <div className={styles.SideBar}>
        <div className={styles.Produkt}>Wyszukaj</div>
        <div className={styles.Produkt}>Produkt:</div>
        <input
          style={{
            borderRadius: '25px',
            width: '165px',
            marginLeft: '16px',
            backgroundColor: 'lightGrey'
          }}
          className={styles.Input}
          placeholder='Szukaj ...'
          value={this.props.products}
          onChange={event => {
            this.props.onProductsChange(event.target.value)
            // console.log(event)
          }}
        />
        <div className={styles.Quantity}>
          Masa:{' '}
          <span className={styles.WeightDisplay}>{this.props.weigth}</span>g
        </div>

        <div className={styles.inputSlide}>
          <input
            style={{
              padding: '7px 0',
              width: '165px',
              marginLeft: '16px',
              webkitAppearance: 'media-volume-sliderthumb',
              borderRadius: '51px',
              height: '20px',
              backgroundColor: 'lightGrey'
            }}
            id='typeinp'
            type='range'
            min='0'
            max='2000'
            step='50'
            value={this.props.weigth}
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
              backgroundColor: 'lightGrey'
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
              // console.log(data)
            }}
          />
        </div>

        <br />
        <div className={styles.Vawourites}>
          Ulubione <Heart />
        </div>
      </div>
    )
  }
}

export default SideBar
