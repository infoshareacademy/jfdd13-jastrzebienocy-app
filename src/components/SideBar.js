<<<<<<< HEAD:food-waste/src/components/SideBar.js
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
=======
import React from "react";
import styles from "./SideBar.module.css";
import Heart from "./Heart";
import Dropdown from "./Dropdown";
import Slider from "./Slider";

class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.SideBar}>
                <div className={styles.Produkt}>Produkt</div>
                <input className={styles.Input}></input>
                <div className={styles.Quantity}>Ilość</div>
                <Slider /> 
                <br/>
                <div className={styles.dropdown}><Dropdown /></div>
                <br/>
                <div className={styles.Vawourites}>Ulubione <Heart /></div>
            </div>
        )
    }
}
>>>>>>> master:src/components/SideBar.js

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
