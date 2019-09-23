import React from 'react'

export default class LoggingButton extends React.Component {
  // @babel/plugin-proposal-class-properties
  handleClick = () => {
    console.log('this is:', this)
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>
  }
}
