import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import store, { appHistory } from '../store/store';
import Routes from './Routes'

// this server is configurator-server http-server . --cors=Authorization
const configuration = {
    serverURL: "http://192.168.1.100:8080/app.json"
}
const App = () => {
    const [appConfiguration, setAppConfiguration] = useState({});
    useEffect(() => {
        axios.get(configuration.serverURL)
            .then(function (response) {
                // handle success
                let manipulatedResponse = {};
                if (response.data && response.data.uiFragments && response.data.uiFragments.length > 0) {
                    let uiFragments = {}
                    response.data.uiFragments.forEach(singlePage => {
                        uiFragments[singlePage.name] = singlePage;
                    })

                    manipulatedResponse = {
                        ...manipulatedResponse,
                        uiFragments
                    }
                }

                if (response.data && response.data.uiPages && response.data.uiPages.length > 0) {
                    let uiPages = {}
                    response.data.uiPages.forEach(singlePage => {
                        uiPages[singlePage.name] = singlePage;
                    })

                    manipulatedResponse = {
                        ...manipulatedResponse,
                        uiPages
                    }
                }
                setAppConfiguration(manipulatedResponse)
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
                        <Routes appConfig={appConfiguration} />
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