import React, {Component} from 'react';
import {Bar, Line, Pie } from 'react-chartjs-2';
import styles from "./Charts.module.css";

class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
              labels: ['Kwiecien', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień'],
              datasets:[
                  {
                      label: 'Ilosc Uzytkownikow',
                      data:[
                          0,
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
    <div  className={styles.chart}>
    <Bar
  data={this.state.chartData}
  width={100}
  height={100}
  
  options={{ 
    ticks: {
    min: 0 },
        title:{
        display: true,
          text: 'Liczba użytkowników korzystających z aplikacji',
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

export default BarChart;