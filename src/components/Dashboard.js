import React from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import styles from "./Dashboard.module.css";
import DashboardHeader from './DashboardHeader';



class Dashboard extends React.Component {
    constructor(props) {
      super(props);
  
    }

    // 0. stworz pusty stan, reprezentujacy albo data/label albo pie/bar charts
    // 1. na zamontowanie komponentu, pobierz dane
    // 2. przeksztalc dane z postaci firebase na gotowe do wprowadzenia do chartow
    // 3. po wykonaniu 1 i 2, zaktualizuj stan (this.setState)
    // 4. Przekaz dane do komponentow BarChart i PieChart
    // 5. jak wychodzisz z Dashboard, posprzataj po sobie (stopRecepies)
  
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