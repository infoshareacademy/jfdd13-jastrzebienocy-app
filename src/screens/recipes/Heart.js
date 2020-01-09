import React from 'react'
import { Icon } from 'semantic-ui-react'

class Heart extends React.Component {

  handleOnClick = () => {
    this.props.onHeartClick();
  }

  render() {
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
