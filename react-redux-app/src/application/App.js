import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import store, {appHistory} from '../store/store';
import routes from './routes'
const App = () => {
    return (
        <Provider store={store}>
              <ConnectedRouter history={appHistory}>
              { routes }
              </ConnectedRouter>
        </Provider>
    );
}

export default App;