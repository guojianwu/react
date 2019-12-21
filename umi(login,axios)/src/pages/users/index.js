import {Link,router} from "umi"
import styles from './index.css';

export default function() {
  return (
    <div>
      <h1  className={styles.normal}>Page index</h1>
      <p onClick={()=>{router.goBack()}}>back</p>
    </div>
  );
}
