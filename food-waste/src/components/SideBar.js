import React from "react";
import styles from "./SideBar.module.css";

class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.SideBar}>
                <div className={styles.Produkt}>Produkt</div>
                    <input></input>
                <div className={styles.Quantity}>Ilość</div>
                <div className={styles.Kategory}>Kategoria</div>
                <div className={styles.Vawourites}>Ulubione</div>
            </div>
        )
    }
}





export default SideBar;