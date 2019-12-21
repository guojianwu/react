import {connect} from "dva"
import {Redirect} from "umi"
export default connect((state)=>({user:state.user}))((props) => {
  console.log(props.user)

  return (
    <div>
      { props.user.token?props.children: <Redirect to="/login"></Redirect>}
    </div>
  );
})