import React from 'react'
import styles from "./Dashboard.module.css";



class DashboardHeader extends React.Component {
    constructor(props) {
      super(props);
  
    }
  
    render() {
      return (
        <div className={styles.header}>
        <h1>Hello world</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum </p>
        </div>
      );
    }
  }

  export default DashboardHeader;