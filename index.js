/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './source/App';
import {name as appName} from './app.json';

const Vayyupp = props => (
    <App />
  )

AppRegistry.registerComponent(appName, () => Vayyupp);
