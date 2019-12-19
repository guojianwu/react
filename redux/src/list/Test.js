import React, { Component } from 'react'
import { connect } from 'react-redux'
@connect(state=>({list:state.list.list}))
class Test extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    const {list} = this.props;
    return (
      <div>
        <ul>
          {
            list.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Test;