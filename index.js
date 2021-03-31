/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import ConfigureStore from './Redux/Store/ReduxStore';
import React from 'react';

const Store = () => {
    return(
        <Provider store = {ConfigureStore()}>
            <App/>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Store);
