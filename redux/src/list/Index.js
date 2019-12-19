import React,{useState} from 'react'
import { connect } from 'react-redux'
import action from '../store/list/action'

function Index({list,add}) {
  const [name, setName] = useState("")
  return (
    <div>
      <p>num:{list.num}</p>
      <ul>
        {list.list.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
      <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={()=>{add(name);setName("")}}>add</button>
      </div>
    </div>
  )
}
export default connect((state)=>({list:state.list}),action)(Index)