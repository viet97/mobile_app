import {
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import { Keyboard, StyleSheet } from 'react-native';
import Toast from 'react-native-root-toast';
let timeoutVar = null;

export default class NavigationService {
  static getInstance(navigation) {
    if (!this._instance) {
      if (navigation) {
        this._instance = new NavigationService(navigation);
      }
    } else {
      if (navigation) {
        this.navigation = navigation;
      }
    }
    return this._instance;
  }
  static clear() {
    if (this._instance) {
      delete this._instance;
    }
  }
  constructor(navigation) {
    this.displayName = 'NavigationService';
    this.navigation = navigation;
  }
  _checkNavigation() {
    return !!this.navigation && !!this.navigation.dispatch;
  }

  navigate({ routerName, params }) {
    if (!this._checkNavigation() || !routerName) {
      return;
    }
    Keyboard.dismiss();
    this.navigation.dispatch(
      CommonActions.navigate({
        name: routerName,
        params: params,
      })
    );
  }

  showToast(
    {
      message = '',
      second = 3,
      onShow = () => { },
      onHide = () => { },
      onShown = () => { },
      onHidden = () => { },
    } = {
        message: '',
        second: 3,
        onShow: () => { },
        onHide: () => { },
        onShown: () => { },
        onHidden: () => { },
      }
  ) {
    if (this.toast) {
      //not show duplicate toast
      if (this.previousMessage === message) {
        return;
      }
      Toast.hide(this.toast);
      this.toast = null;
    }
    const configToast = {
      duration: Toast.durations.LONG,
      position: -60,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        this.previousMessage = message;
        onShow();
      },
      onShown: onShown,
      onHide: onHide,
      onHidden: () => {
        this.previousMessage = '';
        onHidden();
      },
      useNativeDriver: true,
    };
    this.toast = Toast.show(message, configToast);
    if (timeoutVar) {
      clearTimeout(timeoutVar);
      timeoutVar = null;
    }
    const callback = () => {
      Toast.hide(this.toast);
      this.toast = null;
    };
    timeoutVar = setTimeout(callback, second * 1000);
  }

  goBack({ n = 1 } = { n: 1 }) {
    if (!this._checkNavigation()) {
      return;
    }
    const popAction = StackActions.pop(n); // CommonActions.goBack();
    if (timeoutVar) {
      clearTimeout(timeoutVar);
      timeoutVar = null;
    }
    const callback = () => {
      this.navigation.dispatch(popAction);
    };
    timeoutVar = setTimeout(callback);
  }

  resetWithNewRoute = ({ routes, index = 0 }) => {
    if (!this._checkNavigation()) {
      return;
    }

    const resetAction = CommonActions.reset({
      index,
      routes,
    });
    if (timeoutVar) {
      clearTimeout(timeoutVar);
      timeoutVar = null;
    }
    const callback = () => {
      this.navigation.dispatch(resetAction);
    };
    timeoutVar = setTimeout(callback, 0);
  };

  reset({ routerName, params }) {
    if (!this._checkNavigation()) {
      return;
    }
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routerName,
          params: params,
        },
      ],
    });
    if (timeoutVar) {
      clearTimeout(timeoutVar);
      timeoutVar = null;
    }
    const callback = () => {
      this.navigation.dispatch(resetAction);
    };
    timeoutVar = setTimeout(callback, 0);
  }
}

const styles = StyleSheet.create({});

export const NavigationServiceRq = NavigationService;
