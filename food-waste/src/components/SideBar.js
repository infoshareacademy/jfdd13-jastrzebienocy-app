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

export default SideBar;