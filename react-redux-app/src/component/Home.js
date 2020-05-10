import React from 'react'
import { connect } from 'react-redux';
import HomeMetaJSON from './Home.meta.json';


const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <div onClick={() => {
        /** do something before redirection */
        props.dispatchOutcome({
          type:HomeMetaJSON.navigation[0].action,
          payload:HomeMetaJSON.navigation[0]
        })
      }}>dispatch</div>
    </div>)
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    dispatchOutcome: (payload) => dispatch(payload)
  }
}

const connectedComponent =  connect(null, mapDispatchToProps)(Home);
export default connectedComponent;

