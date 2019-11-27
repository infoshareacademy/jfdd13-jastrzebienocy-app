import React from 'react'
import styles from './SideBar.module.css'
import Heart from './Heart'
import { Icon } from 'semantic-ui-react'

import { Dropdown } from 'semantic-ui-react'

const dropdownI = [
  {
    key: 'Kuchnia włoska',
    text: 'Kuchnia włoska',
    value: 'Włoska'
  },
  {
    key: 'Kuchnia azjatycka',
    text: 'Kuchnia azjatycka',
    value: 'Azjatycka'
  },
  {
    key: 'Kuchnia polska',
    text: 'Kuchnia polska',
    value: 'Polska'
  },
  {
    key: 'Kuchnia francuska',
    text: 'Kuchnia francuska',
    value: 'Francuska'
  }
]
class SideBar extends React.Component {
  render () {
    return (
      <div className={styles.SideBar}>
        <div className={styles.Produkt}>Wyszukaj</div>
        <div className={styles.Produkt}>Produkt:</div>
        <input  style={{'borderRadius':'25px',
                         'width': '165px',
                         'marginLeft': '16px'}}
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

        <input 
          className={styles.inputSlide}
          style={{padding: '7px 0',
                  'width': '165px',
                  'marginLeft': '16px'}}
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

        <div className={styles.Category}>Kategoria:</div>

        <div className={styles.dropdown}>
          <Dropdown  style={{'borderRadius':'25px',
                             'width': '165px',
                             'marginLeft': '16px'}}
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
