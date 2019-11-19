import React from 'react'
import { Icon } from 'semantic-ui-react'

class Heart extends React.Component {
state = {
  icon:'heart outline'
}

  handleOnClick = () => {
    this.setState ({ icon: this.state.icon === 'heart' ? 'heart outline' : 'heart'})
  }
  render () {
    return <Icon onClick={ this.handleOnClick } name={ this.state.icon} size='big' />
  }
}



export default Heart


