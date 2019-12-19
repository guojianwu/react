import React, { Component } from 'react'
import { connect } from "react-redux"
import action from '../store/count/action'
function withLog(Component) {
  console.log("withLog")
  return props => <Component {...props} />
}

@connect(
  state => ({ count: state.count.count }),
  action
)
class Test extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  jia=()=>{
    const { increase } = this.props;
    increase()
  }
  render() {
    const { count,decrease } = this.props;
    return (
      <div>
        <p> {count}</p>
        <button onClick={this.jia}>+</button>
        <button onClick={()=>{decrease()}}>-</button>
      </div>
    )
  }
}

export default Test;