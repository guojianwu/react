import styles from './index.css';
import {connect} from "dva"




function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {/* <p className={styles.red}>red</p> */}
      {props.children}
      <ul>
        {
          props.goods.list.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default connect(state=>({goods:state.goods}))(BasicLayout);
