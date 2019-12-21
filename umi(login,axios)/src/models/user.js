export default {
  namespace: 'user',
  state: {
    token: localStorage.getItem("token")||"",
  },
  effects:{

  },
  reducers: {
    login(state,action){
      return {...state, token:action.payload}
    }
    // // 改变首页显示模式    
    // changeMode(state, { payload: data }) {
    //   //此处必须返回一个新的state对象 不能直接改变原有state    
    //   return Object.assign({}, state, {
    //     isQuickMode: data.value
    //   })
    // },
    // changeChatObj(state, { payload: data }) {
    //   return Object.assign({}, state, {
    //     chatobject: data.value
    //   })
    // }
  }
}
