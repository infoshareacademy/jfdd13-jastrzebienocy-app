import React from "react";
import styles from "./SideBar.module.css";
import Heart from "./Heart";
import Dropdown from "./Dropdown";
// import { Button, Icon, Label } from 'semantic-ui-react';

class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.SideBar}>
                <div className={styles.Produkt}>Produkt</div>
                <input className={styles.Input}></input>
                <div className={styles.Quantity}>Ilość</div>
                <Dropdown className={styles.dropdown} />
                <br/>
                <div className={styles.Vawourites}>Ulubione <Heart className={styles.Heart}/></div>s
            </div>
        )
    }
}

export default SideBar;