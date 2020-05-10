import React from 'react'
import { connect } from 'react-redux';
import P3Meta from './P3.meta.json'


const P3 = (props) => {
 
  return (
    <div>
      <h1>P3</h1>
      <hr />
      <div onClick={() => {

        /** do something before redirection */
        props.dispatchOutcome({
          type: P3Meta.navigation[0].action,
          payload: P3Meta.navigation[0]
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

const connectedComponent =  connect(null, mapDispatchToProps)(P3);
export default connectedComponent;

