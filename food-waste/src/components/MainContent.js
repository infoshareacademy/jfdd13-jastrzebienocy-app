import React from "react";
import styles from "./MainContent.module.css";
import RecipesToRender from "../RecipesToRender";

class MainContent extends React.Component {
    render() {
        return (
            <div className={styles.MainContent}>Jakis ladny txt do Majna
            <RecipesToRender/>
            </div>
        )
    }
}

export default MainContent;