
import styles from './index.css';
import { connect } from "dva"
import { useEffect } from "react"

export default connect(state => ({ goods: state.goods }), { getGoods: () => ({ type: "goods/getGoods" }),add: (payload) => ({ type: "goods/add",payload }) })(function (props) {
  const { list } = props.goods;
  // const {getGoods} = props;
  // getGoods();
  useEffect(() => {
    const { getGoods } = props;
    getGoods();
  }, [])
  return (
    <div className={styles.normal}>
      <h1 onClick={() => { props.add(Math.random()) }}>Page index</h1>
      <ul>
        {
          list.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
})
