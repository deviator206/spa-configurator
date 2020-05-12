import React from 'react'
import { connect } from 'react-redux';
import P4Meta from './P4.meta.json';

const P4 = (props) => {
  return (
    <div>
      <h1>P4</h1>
      <hr />
      <div onClick={() => {

        /** do something before redirection */
        props.dispatchOutcome({
          type: P4Meta.navigation["P4_ALSO_NEXT_CLICKED"].action,
          payload: P4Meta.navigation["P4_ALSO_NEXT_CLICKED"]
        })
      }}>navigate to Home</div>
    </div>)
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    dispatchOutcome: (payload) => dispatch(payload)
  }
}


const connectedComponent =  connect(null, mapDispatchToProps)(P4);
export default connectedComponent;
