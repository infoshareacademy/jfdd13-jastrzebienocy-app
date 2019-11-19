import React, {Component} from 'react';
import {Bar, Line, Pie } from 'react-chartjs-2';
import styles from "./Charts.module.css";

class PieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
              labels: ['April', 'May', 'June', 'July', 'August', 'September'],
              datasets:[
                  {
                      label: 'Ilosc Uzytkownikow',
                      data:[
                          5,
                          10, 
                          20, 
                          30, 
                          40, 
                          50],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(255, 206, 86, 0.6)',
                          'rgba(75, 199, 192, 0.6)',
                          'rgba(153, 99, 232, 0.6)',
                      ] 
                  }
              ] 
            }
        }
    }
    
    render() {
        return (
     <div  className={styles.chart2}>
<Pie
  data={this.state.chartData}
  width={100}
  height={100}
  
  options={{ 
    ticks: {
    min: 0 },
        title:{
        display: true,
          text: 'Liczba uzytkownikow korzystajacych z aplikacj',
          fontSize:25
      },
        legend:{
          display: true,
          position: 'bottom'
      }
       }}

/> 

    </div>
   
   ) }
}

export default PieChart;