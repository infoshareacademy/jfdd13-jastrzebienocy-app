import React from 'react';
import styles from './SideBar.module.css';
import Search from './Filter';
import Dropdown from './Dropdownm';

class SideBar extends React.Component {
	render() {
		return (
			<div className={styles.SideBar}>
				<div className={styles.Produkt}>Produkt</div>

				<div className={styles.Quantity}>Ilość</div>
				<div className={styles.Kategory}>Kategoria</div>
				<div className={styles.Vawourites}>Ulubione</div>
			</div>
		);
	}
}

export default SideBar;
