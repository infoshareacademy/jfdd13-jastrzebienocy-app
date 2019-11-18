import React from 'react-dom'
import {chart} from 'react-chartjs'



class BarChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    render() {
      return (
        <canvas ref={this.chartRef} />
      );
    }


  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.value),
          backgroundColor: this.props.color
        }]
      }
    });
  }

}


export default BarChart;