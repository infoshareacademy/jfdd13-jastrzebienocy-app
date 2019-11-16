import React from "react";
import styles from "./SideBar.module.css";

class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.SideBar}>
                <div className={styles.Produkt}>Produkt</div>
                <div className={styles.Ilość}>Ilość</div>
                <div className={styles.Kategoria}>Kategoria</div>
                <div className={styles.Ulubione}>Ulubione</div>
                <div className={styles.Szukaj}>Szukaj</div>
            </div>
        )
    }
}





export default SideBar;