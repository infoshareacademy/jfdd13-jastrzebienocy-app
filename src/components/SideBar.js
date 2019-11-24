import React from 'react'
import styles from './SideBar.module.css'
import Heart from './Heart'
// import Dropdown from './Dropdown'
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
          className={styles.Input}
          placeholder='Szukaj ...'
          value={this.props.products}
          onChange={event => {
            this.props.onProductsChange(event.target.value)
            console.log(event)
          }}
        />
        <div className={styles.Quantity}>Masa [g]</div>

        <input
          className={styles.inputSlide}
          id='typeinp'
          type='range'
          min='0'
          max='2000'
          step='50'
          value={this.props.weigth}
          onChange={event => {
            this.props.onWeigthChange(event.target.value)
            console.log(event)
          }}
        />
        <span style={{ color: 'yellow' }}>{this.props.weigth}</span>

        {/* <br /> */}
        <div className={styles.Kategory}>Kategoria</div>

        <div className={styles.dropdown}>
          <Dropdown
            size='massive'
            placeholder='Kategoria'
            fluid
            selection
            options={dropdownI}
            value={this.props.category}
            onChange={data => {
              this.props.onCategoryChange(data.value)
              console.log(data)
            }}
          />
        </div>

        <br />
        <div className={styles.Vawourites}>
          Ulubione <Heart />
        </div>

        {/* <input className={styles.Input} />
        <div className={styles.Quantity}>Ilość</div>
         <div className={styles.Kategory}>Kategoria</div>
		<div className={styles.Vawourites}>Ulubione</div>
        <Heart /> */}
      </div>
    )
  }
}

export default SideBar
// najpierw pw searchu dodać onsearch i potem tutaj dodać w sidebarze to co jest wklejone.
// onSubmit={(values) => {
// 	onSearch(values);
// }}
