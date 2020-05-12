import React, {useState} from 'react'
import { connect } from 'react-redux';
import HomeMetaJSON from './Home.meta.json';


const Home = (props) => {
const [inputVal , setInputVal] = useState(10);

  return (
    <div>
      <h1>Home</h1>
      <input type="text" onChange={(evt)=> {
        setInputVal(evt.target.value)
      }}/>
      <div onClick={() => {
        /** do something before redirection */
        props.dispatchOutcome({
          type:HomeMetaJSON.navigation.HOME_NEXT_CLICKED.action,
          payload:{ 
              ...HomeMetaJSON.navigation.HOME_NEXT_CLICKED,
              homeValue:inputVal.toString(),
              pageIdentifier:HomeMetaJSON.name // give the page identifier
            }
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

