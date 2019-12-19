import React, { useState } from 'react'
import { connect } from "react-redux"
import action from "../store/count/action";

function Test({ count, increase, decrease,addCount }) {
  const [nun, setNum] = useState("")
  return (
    <div>
      <p> {count}</p>
      <button onClick={() => { increase() }}>+</button>
      <button onClick={() => { decrease() }}>-</button>
      <div>
      <input type="text" value={nun} onChange={(e) => { setNum(e.target.value) }} />
      <button onClick={()=>{addCount(nun); setNum("")}}>add</button>
      </div>
    </div>
  )
}

          

export default connect(state=>({count:state.count.count}),action)(Test);        