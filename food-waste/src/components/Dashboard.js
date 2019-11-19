import React from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import styles from "./Dashboard.module.css";
import DashboardHeader from './DashboardHeader';



class Dashboard extends React.Component {
    constructor(props) {
      super(props);
  
    }
  
    render() {
      return (
        <div>
        <DashboardHeader />
        <div className={styles.wrapper}>
        <BarChart />
        <PieChart />
        </div>
        </div>
      );
    }
  }

  export default Dashboard;