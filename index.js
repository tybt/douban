 
import React from 'react';
import {AppRegistry} from 'react-native';
import configureStore from './src/store/configure-store';
import Router from './src/router';
import {name as appName} from './app.json';
import rootSaga from './src/sagas/index';
import { Provider } from 'react-redux';

console.disableYellowBox = true;

const store = configureStore();

// run root saga
store.runSaga(rootSaga);

const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

AppRegistry.registerComponent(appName, () => (Root));