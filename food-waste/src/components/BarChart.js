import React, {Component} from 'react';
import {Bar, Line, Pie } from 'react-chartjs-2';
import styles from "./Charts.module.css";


class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
              labels: ['Kwiecien', 'Maj', 'Czerwiec', 'Wrzesień', 'Październik', 'Listopad'],
              datasets:[
                  {
                      label: 'Ilosc Uzytkownikow',
                      data:[
                          10,
                          30, 
                          60, 
                          100, 
                          250, 
                          400],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(255, 206, 86, 0.6)',
                          'rgba(75, 199, 192, 0.6)',
                          'rgba(153, 99, 232, 0.6)',
                          'rgba(33, 99, 232, 0.6)',
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
  
 
    ///Other configurable options
    

  options={{
    tooltips: {
        bodyFontColor: "black"
    },
      
    scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 500
            },
            ticks: {
                fontColor: "#212121",
                fontFamily: "Oswald sans-serif",
                fontSize: 14,
                fontStyle: "bold"
              }
        }
        ],
        xAxes: [
            {
              ticks: {
                  fontColor: "#212121",
                  fontFamily: "Oswald sans-serif",
                  fontSize: 14,
                  fontStyle: "bold"
                }
          }
          ]

      },
        title:{
        display: true,
          text: 'Liczba użytkowników korzystających z aplikacji',
          fontSize:22,
          fontFamily: "Oswald sans-serif",
          fontColor: "black",
      },
        legend:{
          display: true,
          position: 'bottom',  
          labels: {
            fontColor: "black",
            fontSize: 24,
            fontFamily: "Oswald sans-serif",
        }
      },
     

       }}

/> 

    </div>
   
   ) }
}

export default BarChart;