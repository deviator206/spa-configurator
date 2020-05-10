import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import { connectRouter , routerMiddleware} from 'connected-react-router'
import {createHashHistory} from 'history';
import navigationMiddleware from './navigationMiddleware';
const appHistory = createHashHistory();

const sampleReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
const logger = store => next => action => {
    console.log('logger: dispatching', action)
    let result = next(action)
    console.log('logger: next state', store.getState())
    return result
  }


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    sampleReducer
  })

const store = createStore(
    createRootReducer(appHistory),
    {},
    compose(
        applyMiddleware(
            routerMiddleware(appHistory),
            navigationMiddleware,
            logger 
        )
      )
)
export default store;

export {
    appHistory
}