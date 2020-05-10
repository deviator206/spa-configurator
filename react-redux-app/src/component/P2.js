import React from 'react'
import { connect } from 'react-redux';
import P2Meta from './P2.meta.json';


const P2 = (props) => {
  return (
    <div>
      <h1>P2</h1>
      <div onClick={() => {

        /** do something before redirection */
        props.dispatchOutcome({
          type: P2Meta.navigation[0].action,
          payload: P2Meta.navigation[0]
        })
      }}>navigate to p3</div>
      <hr />
      <div onClick={() => {

        /** do something before redirection */
        props.dispatchOutcome({
          type: P2Meta.navigation[1].action,
          payload: P2Meta.navigation[1]
        })
      }}>navigate to p4</div>
    </div>)
}


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    dispatchOutcome: (payload) => dispatch(payload)
  }
}

const connectedComponent =  connect(null, mapDispatchToProps)(P2);
export default connectedComponent;
