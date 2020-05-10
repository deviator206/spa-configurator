import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { NavigatorHelper } from '../store/navigationMiddleware';


const P2 = (props) => {
  useEffect(() => {
    NavigatorHelper.addOutcomes(outcomes)
  }, []);
  return (
    <div>
      <h1>P2</h1>
      <div onClick={() => {

        /** do something before redirection */
        props.dispatchOutcome({
          type: outcomes[0].action,
          payload: outcomes[0]
        })
      }}>navigate to p3</div>
      <hr />
      <div onClick={() => {

        /** do something before redirection */
        props.dispatchOutcome({
          type: outcomes[1].action,
          payload: outcomes[1]
        })
      }}>navigate to p4</div>
    </div>)
}
const outcomes = [
  {
    action: 'P2_NEXT_CLICKED',
    routeTo: '/p3'
  },
  {
    action: 'P2_ALSO_NEXT_CLICKED',
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


export default connect(null, mapDispatchToProps)(P2);