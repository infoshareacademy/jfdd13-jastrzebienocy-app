import React from 'react'
import { Icon } from 'semantic-ui-react'
class Heart extends React.Component {
  state = {
    checked: false
  }

  handleOnClick = () => {
    this.setState({
      icon: this.state.icon === 'heart' ? 'heart outline' : 'heart'
    })
    this.setState(
      {
        checked: !this.state.checked
      },
      () => {
        this.props.onHeartClick(this.state.checked)
      }
    )
  }
  render () {
    // return <Icon onClick={this.handleOnClick} name={this.state.icon} />
    const { checked } = this.state
    return (
      <Icon
      
        onClick={this.handleOnClick}
        name={checked ? 'heart' : 'heart outline'}
      />
    )
  }
}
export default Heart
