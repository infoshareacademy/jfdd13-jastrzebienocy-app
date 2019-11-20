import React from 'react';
import styles from './SideBar.module.css';



class Slider extends React.Component {
    constructor() {
      super()
      this.state = {value: 3}
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <div>
          <div className={styles.label}>
            <input className={styles.inputSlide}
              id="typeinp" 
              type="range" 
              min="0" max="2000" 
              value={this.state.value} 
              onChange={this.handleChange}
              step="50"/>
            {this.state.value}
          </div>
        </div> 
      );
    }
  }
  
export default Slider