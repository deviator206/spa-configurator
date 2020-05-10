import React from 'react'
import { connect } from 'react-redux';
import utilsInstance from '../misc/Utility';


const Home = (props) => {
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
const pageConfig = {
  name:'home',
  outcomes
}

const connectedComponent =  connect(null, mapDispatchToProps)(Home);

utilsInstance.pushToGlobal(connectedComponent,pageConfig);

export default connectedComponent;

