var initState={
  list:['a','b','c'],
  num:1
}
const reducre=(state=initState,action) =>{
  switch (action.type) {
    case "ADD":
      const list = [...state.list,action.payload]
      return {...state , list}
  
    default:
      return state;
  }
}

export default reducre 