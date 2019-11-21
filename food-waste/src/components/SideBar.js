import React from 'react';
import styles from './SideBar.module.css';
import Heart from './Heart';
import Search from './Search';
// import { Button, Icon, Label } from 'semantic-ui-react';

const SideBar = (props) => {
	const { onSearch } = props;
	// render() {
	return (
		<div className={styles.SideBar}>
			<div className={styles.Produkt}>Produkt</div>
			<Search
				type="text"
				onSubmit={(recipes) => {
					onSearch(recipes);
				}}
			/>

			{/* <input className={styles.Input} />*/}
			<div className={styles.Quantity}>Ilość</div>
			<div className={styles.Kategory}>Kategoria</div>
			<div className={styles.Vawourites}>Ulubione</div>
			<Heart />
		</div>
	);
	// }
};

export default SideBar;
// najpierw pw searchu dodać onsearch i potem tutaj dodać w sidebarze to co jest wklejone.
// onSubmit={(values) => {
// 	onSearch(values);
// }}
