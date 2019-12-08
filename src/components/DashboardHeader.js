import React from 'react'
import styles from "./Dashboard.module.css";
import { Button, Icon } from 'semantic-ui-react'


class DashboardHeader extends React.Component {
    constructor(props) {
      super(props);
  
    }
  
    render() {
      return (
        <div className={styles.header}>
        
        <p className={styles.header2}>Zobacz, ile żywności marnujesz  </p>
        <Button className={styles.headerButton} size='mini'
        color='youtube' as='a' target='blank' className={styles.headerButton}  href='https://www.youtube.com/watch?v=IzznYgKs8Dw'>
        <Icon className={styles.headerButton} name='youtube' /> YouTube
        </Button>
        
        <p className={styles.header2}>Food Waste pokaże Tobie co możesz z tym zrobić  </p>
        </div>
      );
    }
  }

  export default DashboardHeader;