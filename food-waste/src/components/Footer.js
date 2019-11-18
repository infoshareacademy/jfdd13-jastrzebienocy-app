import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.Footer}>Jakis ladny Footer</div>

    //      <div className={styles.footerBox, styles.footerBoxMobile}>
    //   <span className={styles.copywright}>&copy 2019 Food Waste</span>
    //   <a className={styles.footerLinks} href="">Kontakt</a></span>
    //   <a className={styles.footerLinks} href="">Polityka prywatności</a></span>
    //     </div>
         
        )
    }
}

export default Footer;