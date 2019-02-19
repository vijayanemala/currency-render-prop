import React, { Component } from 'react'

class Euro extends Component {
  render() {
    const amount  = this.props.amount * 0.012;
    return (
      <div>
        <h4 style={{color:'#33ACFF'}}>Rupees to Euros Amount : {amount}</h4>
      </div>
    )
  }
}

export default Euro;
