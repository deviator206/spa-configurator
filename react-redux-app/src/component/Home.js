import React from 'react'
import { push } from 'connected-react-router'
import {connect}from 'react-redux';

const Home = (props) => (
  <div>
    Home
    <div onClick={() => {

      /** do something before redirection */
      props.push('/as');

    }}>login</div>
  </div>
)
export default connect(null, { push })(Home);