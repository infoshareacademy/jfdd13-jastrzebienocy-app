import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import styles from "./Charts.module.css";
import {   watchRecipes, getCategories, unwatchRecipes, } from '../../services/ForFetchDB';

class PieChart extends Component {
        state = {
            chartData: {
            }
        }
    componentDidMount() {
        watchRecipes(recipes => {
            const pieChartData = getCategories(recipes)
            const labels = Object.keys(pieChartData)
            const data = Object.values(pieChartData)
            const chartData = {
                labels: labels,
                datasets: [
                    {
                    label: 'Ilość przepisów z danej kuchni',
                    data: data,
                    backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 199, 192, 0.6)',
                            'rgba(153, 99, 232, 0.6)',
                            'rgba(15, 99, 200, 0.6)',
                            'rgba(133, 199, 232, 0.6)',
                            'rgba(53, 199, 232, 0.6)',
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

            <div className={styles.chart2}>

                <Pie
                    data={this.state.chartData}
                    width={100}
                    height={80}

                    options={ 
                         {
                            tooltips: {
                                bodyFontColor: "white",
                                bodyFontSize: 20,
                            },
                            ticks: {
                                min: 0
                            },
                            title: {
                                display: true,
                                text: 'Ilość przepisów / rodzaje kuchni',
                                fontSize: 18,
                                fontFamily: "Oswald sans-serif",
                                fontColor: "black",
                            },
                            legend: {
                                maintainAspectRatio: false,
                                responsive: true,
                                display: true,
                                position: 'bottom',
                                labels: {
                                    fontColor: "black",
                                    fontSize: 16,
                                    fontFamily: "Oswald sans-serif",
                                }
                            }
                        }}

                />

            </div>

        )
    }
}

export default PieChart;
