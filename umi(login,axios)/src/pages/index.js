import {Link,router} from "umi"
import styles from './index.css';
import axios from 'axios'
import { formatMessage } from 'umi-plugin-locale';
import {useEffect,useState} from "react"
export default function() {
  const [userList, setUserList] = useState([])
  useEffect(()=>{
    axios.get("doubleTwelveAct/winPirzeUser").then((res)=>{
      const {code,data} =res.data;
      if(code==200){
        setUserList(data)
      } 
    })
  },[])
  return (
    <div className={styles.normal}>
      <Link to="/index/users">to users</Link>
      <button onClick={()=>{router.push("/about")}}>to about</button>
      <button onClick={()=>{router.push("/index/goods")}}>to goods</button>
      {
        userList.map((item,index)=>{
          return <p key={index}>{item.userPhone}</p>
        })
      }
      {/* <div className={styles.welcome} /> */}
      {/* <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}aa
          </a>
        </li>
      </ul> */}
    </div>
  );
}
