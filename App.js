import React, { Component } from 'react'
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from './src/themes/Colors';
import AppNavigation from './src/navigation/AppNavigation'
import Loading from './src/components/Loading/index';
import ConfigStore from './src/ConfigStore';
import { Provider } from 'react-redux';
import { RootSiblingParent, setSiblingWrapper } from 'react-native-root-siblings';

const { store } = ConfigStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    setSiblingWrapper((sibling) => (
      <Provider store={store}>{sibling}</Provider>
    ));
    // Images.init();
  }

  render() {
    return (
      <RootSiblingParent>
        <SafeAreaView edges={['right', 'bottom', 'left', 'top']} style={{ flex: 1, backgroundColor: Colors.white }}>
          <SafeAreaProvider>
            <Provider store={store}>
              <StatusBar
                hidden={false}
                barStyle={'light-content'}
                translucent
                backgroundColor={Colors.black}
              />
              <AppNavigation />
              <Loading />
            </Provider>
          </SafeAreaProvider>
        </SafeAreaView>
      </RootSiblingParent>
    )
  }
}

