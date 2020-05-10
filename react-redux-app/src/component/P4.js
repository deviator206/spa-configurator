import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { NavigatorHelper } from '../store/navigationMiddleware';


const P4 = (props) => {
  useEffect(() => {
    NavigatorHelper.addOutcomes(outcomes)
  }, []);
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


export default connect(null, mapDispatchToProps)(P4);