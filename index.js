/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/router';
import {name as appName} from './app.json';

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');


AppRegistry.registerComponent(appName, () => App);
