import React from 'react'
import { Icon } from 'semantic-ui-react'

class Heart extends React.Component {

  handleOnClick = () => {
    this.props.onHeartClick();
  }

  render() {
    // return <Icon onClick={this.handleOnClick} name={this.state.icon} />
    const { checked } = this.props
    return (
      <Icon
        onClick={this.handleOnClick}
        name={checked ? 'heart' : 'heart outline'}
      />
    )
  }
}

export default Heart
