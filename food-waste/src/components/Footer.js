import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component {
    render() {
        return (
         <div className={`${styles.footerBox} ${styles.footerBoxMobile}`}>
         <span className={styles.copywright}>© 2019 Food Waste</span>
          <a className={styles.footerLinks} href="">Kontakt</a>
          <a className={styles.footerLinks} href="">Polityka prywatności</a>     
         </div>
    
        )
    }
}

export default Footer;