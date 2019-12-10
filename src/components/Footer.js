import React from "react";
import styles from "./Footer.module.css";
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
         <div className={`${styles.footerBox} ${styles.footerBoxMobile}`}>
         <span className={styles.copywright}>© 2019 Food Waste</span>
          <Link to="/privacy" className={styles.footerLinks} >Polityka prywatności</Link>     
         </div>
        )
    }
}

export default Footer;