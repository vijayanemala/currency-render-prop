import React, { Component } from 'react'

class Pound extends Component {
  render() {
    const amount  = this.props.amount * 0.011;
    return (
      <div>
        <h4 style={{color:'#FF5733'}}>Rupees to Pounds Amount : {amount}</h4>
      </div>
    )
  }
};
export default Pound;
