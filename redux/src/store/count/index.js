const reducer = (state = { count: 1 }, action) => {
  switch (action.type) {
    case 'INCREASE': return { count: state.count + 1 };
    case 'DECREASE': return { count: state.count - 1 };
    case "ADDCOUNT":
      var count = parseInt(action.payload ) || 1;
      return {
        count: state.count+count
      }
    default: return state;
  }
}
export default reducer;