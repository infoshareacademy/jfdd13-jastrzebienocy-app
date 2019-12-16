import React, { Component } from 'react';
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
<<<<<<< HEAD
         <div className={`${styles.footerBox} ${styles.footerBoxMobile}`}>
         <span className={styles.copywright}>© 2019 Food Waste</span>
          <Link to="/privacy" className={styles.footerLinks} >Polityka prywatności</Link>     
         </div>
=======
            <div className={`${styles.footerBox} ${styles.footerBoxMobile}`}>
                <span className={styles.copywright}>© 2019 Food Waste</span>
                <Link to="/privacy" className={styles.footerLinks} >Polityka prywatności</Link>
            </div>
>>>>>>> 3f9c2e742f250a77a97b681f1641ec0b79f3c316
        )
    }
}

export default Footer;