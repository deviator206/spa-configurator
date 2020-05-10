import React from 'react'
import { connect } from 'react-redux';
import utilsInstance from '../misc/Utility';

const P4 = (props) => {
  return (
    <div>
      <h1>P4</h1>
      <hr />
      <div onClick={() => {

        /** do something before redirection */
        props.dispatchOutcome({
          type: outcomes[0].action,
          payload: outcomes[0]
        })
      }}>navigate to Home</div>
    </div>)
}
const outcomes = [
  {
    action: 'P4_ALSO_NEXT_CLICKED',
    routeTo: '/'
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
  name:'p4',
  outcomes
}

const connectedComponent =  connect(null, mapDispatchToProps)(P4);
utilsInstance.pushToGlobal(connectedComponent,pageConfig);
export default connectedComponent;