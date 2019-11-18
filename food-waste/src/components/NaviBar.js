import React from "react";
import styles from "./NaviBar.module.css";
import Logo from "./logo-nav.png";



class NaviBar extends React.Component {
    render() {
        return (
            <div className={styles.NaviBar}>
                    <span>
                    <img src={Logo} alt={"Logo"} className={styles.logo}/>
                    </span>
             <div className={styles.NaviBarRight}>
                    <a href="" className={styles.Dashboard}>Dashboard</a>
                    <a href="" className={styles.Przepisy}>Przepisy</a>
                    <a href="" className={styles.Profil}>Profil</a>
                    </div> 
            </div>
        )
    }
}

export default NaviBar;