
const increase= ()=>({type:"INCREASE"});
const decrease = ()=>({type:"DECREASE"})
const addCount = (count)=>({type:"ADDCOUNT",payload:count})

export default {
  increase,
  decrease,
  addCount
  
}