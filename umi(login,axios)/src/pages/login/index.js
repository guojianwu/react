import {connect} from "dva"
import styles from './index.css';

export default connect(
  state=>({user:state.user}),
  {
    login:(token)=>({type:"user/login",payload:token})
  }
  )((props)=> {
 
  const onLogin=()=>{
    var token=Math.random()*10000;
    props.login(token)
    localStorage.setItem("token",token)
    props.history.push('/')
  }
  
  return (
    <div className={styles.normal}>
      <h1>Page login:{props.user.token}</h1>
      <button onClick={()=>{onLogin()}}>login</button>
    </div>
  );
})
