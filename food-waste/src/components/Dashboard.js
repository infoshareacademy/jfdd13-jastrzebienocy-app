import React from 'react-dom'
import BarChart from '.barChart'



class Dashboard extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        feeds: getFeeds()
      };
    }
  
    render() {
      return (
        <div className="Dashboard">
          <BarChart
            data={this.state.feeds[1].data}
            title={this.state.feeds[1].title}
            color="#70CAD1"
          />
        </div>
      );
    }
  }

  export default Dashboard;