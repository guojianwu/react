export default {
  namespace: 'goods',
  state: {
    list: []
  },
  effects: {
    *getGoods(action, { put, call }) {
      // console.log(11111)
      // const data=yield test()
      // console.log(data)
      // setTimeout(() => {
      //   yield put({ type: "add", payload: ["a1", "b1", "c1"] })
      // }, 1000)
       const data = yield call(test);
      //  console.log(data)
      yield put({ type: "init", payload: data })

    }
  },
  reducers: {
    init(state, action){
      return { ...state, list: action.payload }
    },
    add(state, action) {
      return { ...state, list: [...state.list, action.payload] }
    }
  }
}

function test(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(["a1", "b1", "c1"])
    },1000)
  })
}


