import React from "react";
import styles from "./NaviBar.module.css";


class NaviBar extends React.Component {
    render () { return (
    <div className={styles.NaviBar}>
        <a href="" className={styles.logo}>Logo</a>
        <a href="" className={styles.Dashboard}>Dashboard</a>
        <a href="" className={styles.Przepisy}>Przepisy</a>
        <a href="" className={styles.Profil}>Profil</a>
    </div>
    )
    }
}


export default NaviBar;