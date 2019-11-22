import React from 'react'
import styles from './SideBar.module.css'
import Heart from './Heart'
import Dropdown from './Dropdown'
import Slider from './Slider'

class SideBar extends React.Component {
  render () {
    return (
      <div className={styles.SideBar}>
        <div className={styles.Produkt}>Wyszukaj</div>
        <div className={styles.Produkt}>Produkt</div>
        <input className={styles.Input} placeholder='Szukaj ...' />
        <div className={styles.Quantity}>Masa</div>
        <Slider />
        {/* <br /> */}
        <div className={styles.Kategory}>Kategoria</div>

        <div className={styles.dropdown}>
          <Dropdown />
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
