import React from 'react'
import { connect } from 'react-redux';
import utilsInstance from '../misc/Utility';


const P3 = (props) => {
 
  return (
    <div>
      <h1>P3</h1>
      <hr />
      <div onClick={() => {

        /** do something before redirection */
        props.dispatchOutcome({
          type: outcomes[0].action,
          payload: outcomes[0]
        })
      }}>navigate to p4</div>
    </div>)
}
const outcomes = [
  {
    action: 'P3_ALSO_NEXT_CLICKED',
    routeTo: '/p4'
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
  name:'p3',
  outcomes
}

const connectedComponent =  connect(null, mapDispatchToProps)(P3);
utilsInstance.pushToGlobal(connectedComponent,pageConfig);
export default connectedComponent;