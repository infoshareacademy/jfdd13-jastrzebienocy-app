import React from 'react';
import styles from './SideBar.module.css';
import Search from './Search';
// import Dropdown from './Dropdownm';

class SideBar extends React.Component {
	render() {
		return (
			<div className={styles.SideBar}>
				<div className={styles.Produkt}>Produkt</div>
				<Search />
				<div className={styles.Quantity}>Ilość</div>
				<div className={styles.Kategory}>Kategoria</div>
				<div className={styles.Vawourites}>Ulubione</div>
			</div>
		);
	}
}

export default SideBar;
