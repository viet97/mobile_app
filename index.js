/**
 * @format
 */

import { AppRegistry, UIManager } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { IS_ANDROID } from './src/utils/DeviceUtil';

if (IS_ANDROID) {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

AppRegistry.registerComponent(appName, () => App);
