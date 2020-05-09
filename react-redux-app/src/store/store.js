import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import { connectRouter , routerMiddleware} from 'connected-react-router'
import {createHashHistory} from 'history';
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

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    sampleReducer
  })

const store = createStore(
    createRootReducer(appHistory),
    {},
    compose(
        applyMiddleware(
          routerMiddleware(history) // for dispatching history actions
        )
      )
)
export default store;

export {
    appHistory
}