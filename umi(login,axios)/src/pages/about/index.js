import {Link,router} from "umi"
import styles from './index.css';
import {connect} from "dva"


export default function(props) {
  console.log(props)
  return (
    <div>
      <h1 className={styles.normal}>Page index</h1>
      <p onClick={()=>{router.goBack()}}>back</p>
    </div>
  );
}
