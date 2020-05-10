import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { NavigatorHelper } from '../store/navigationMiddleware';


const Home = (props) => {
 useEffect(()=>{
    NavigatorHelper.addOutcomes(outcomes)
  },[]);
  return (
    <div>
      <h1>Home</h1>
      <div onClick={() => {
        /** do something before redirection */
        props.dispatchOutcome({
          type:outcomes[0].action,
          payload:outcomes[0]
        })
      }}>dispatch</div>
    </div>)
}
const outcomes = [
 {
   action:'HOME_NEXT_CLICKED',
   routeTo:'/p2'
 } 
]


export {
  outcomes
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    dispatchOutcome: (payload) => dispatch(payload)
  }
}


export default connect(null, mapDispatchToProps)(Home);