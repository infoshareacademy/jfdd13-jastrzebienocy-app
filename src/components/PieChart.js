import React, {Component} from 'react';
import {Bar, Line, Pie } from 'react-chartjs-2';
import styles from "./Charts.module.css";

class PieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Azjatycka', 'Włoska', 'Polska', 'Francuska', 'Hiszpańska'],
              datasets:[
                  {
                      label: 'Rodzaje kuchni ',
                      data:[
                          5,
                          25, 
                          20, 
                          10, 
                          20, ],
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
  height={80}
  
  options={
    {
        responsive: true,
        maintainAspectRatio: false,
      },{ 
    tooltips: {
        bodyFontColor: "white",
        bodyFontSize: 20,
    },
    ticks: {
    min: 0 },
        title:{
        display: true,
          text: 'Rodzaje kuchni',
          fontSize:22,
          fontFamily: "Oswald sans-serif",
          fontColor: "black",
      },
      legend:{
        maintainAspectRatio: false,
        responsive: true,
        display: true,
        position: 'bottom',  
        labels: {
          fontColor: "black",
          fontSize: 18,
          fontFamily: "Oswald sans-serif",
      }
      }
       }}

/> 

    </div>
   
   ) }
}

export default PieChart;