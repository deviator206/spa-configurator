import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import store, { appHistory } from '../store/store';
import routes from './routes'


// this server is configurator-server http-server . --cors=Authorization
const configuration = {
    serverURL : "http://192.168.1.100:8080/app.json"
}
const App = () => {
    const [appConfiguration, setAppConfiguration] = useState({});
    useEffect(() => {
        axios.get(configuration.serverURL)
            .then(function (response) {
                // handle success
                console.log(response);
                setAppConfiguration(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);


    const getView = () => {
        if (Object.entries(appConfiguration).length > 0) {
            return (
                <Provider store={store}>
                    <ConnectedRouter history={appHistory}>
                        {routes}
                    </ConnectedRouter>
                </Provider>
            )
        } 

        return (
            <h1> Loading ....</h1>
        )
    }

    return (
        <>
            {
              getView()
            }
        </>

    );
}

export default App;