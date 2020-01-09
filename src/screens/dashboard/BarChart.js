import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import styles from "./Charts.module.css";
import {   getCookingTime, watchRecipes, unwatchRecipes  } from '../../services/ForFetchDB';
import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontFamily = "'Oswald', serif"

class BarChart extends Component {
  
    state = {
        chartData: {
        }
    }

componentDidMount() {
    watchRecipes(recipes => {
        const barChartData = getCookingTime(recipes)
        const labels = Object.keys(barChartData)
        const data = Object.values(barChartData)
        const chartData = {
            labels: data,
            datasets: [
                {
                label: 'Czas Gotowania ',
                data: labels,
                backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 199, 192, 0.6)',
                        'rgba(153, 99, 232, 0.6)',
                        'rgba(15, 99, 200, 0.6)',
                        'rgba(133, 199, 232, 0.6)',
                        'rgba(53, 199, 232, 0.6)',
                        'rgba(153, 99, 122, 0.6)',
                        'rgba(53, 109, 132, 0.6)',
                        'rgba(153, 100, 112, 0.6)'
                    ]
                }
            ]
        }
        this.setState({
            chartData
        })
    });
}
componentWillUnmount() {
  unwatchRecipes()
  if (this.unsubscribe) {
    this.unsubscribe()
  }
}
    
    render() {
        return (
    <div  className={styles.chart}>
    <Bar
  data={this.state.chartData}
  options={{
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: "#212121",
              fontFamily: "Oswald sans-serif",
               fontSize: 18,
               fontStyle: "bold",
        }
      }],
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
        text: 'Czas gotowania w min / Ilość przepisów',
        fontSize:18,
        fontFamily: "Oswald sans-serif",
        fontColor: "black",
    },
    tooltips: {
      bodyFontColor: "white",
      bodyFontSize: 20,
  },
    legend:{
            fontSize:26,
            display: false,
    }
      }}
  width={90}
  height={80}
/> 

    </div>
   
   ) }
}

export default BarChart;


   
