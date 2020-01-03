import React from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import styles from "./Dashboard.module.css";
import DashboardHeader from './DashboardHeader';


class Dashboard extends React.Component {
    render() {
      return (
        <div className={styles.dasboardAll}>
        <div>
        <DashboardHeader />
        <div className={styles.wrapper}>
        <BarChart />
        <PieChart />
        </div>
        </div>
        </div>
      );
    }
  }

  export default Dashboard;