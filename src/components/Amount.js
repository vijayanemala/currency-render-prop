import React, { Component } from 'react'

class Amount extends Component {
constructor(props) {
    super(props);
    this.state = {
        amount: 0
    }
}
    onIncrement = () => {
        this.setState(state => ({amount: this.state.amount + 1}));
    }
    onDecrement = () => {
        this.setState(state => ({amount: this.state.amount - 1}));
    }
  render() {
    const {amount} = this.state;
    return (
      <div>
        <h1 style={{color:'#3355FF'}}>My Currency Conversion</h1>
        <span style={spanStyle}>US Dollars : {amount}</span><br/>
        <button style={buttonStyle} type="button" onClick={this.onIncrement}>+</button>
        <button  style={buttonStyle}type="button" onClick={this.onDecrement}>-</button>

        {this.props.children(amount)}
      </div>
    )
  }
}
const spanStyle = {
    fontSize: '40px',
    fontFamily: 'ChronicleTextG1-Roman, serif'
}

const buttonStyle = {
    fontSize: '20px',
    margin: '10px'
}
export default Amount;
