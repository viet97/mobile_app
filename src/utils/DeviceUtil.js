import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import AppInfoManager from '../AppInfoManager';

export const IS_ANDROID = Platform.OS === 'android';

const { width, height } = Dimensions.get('screen');
export const widthDevice = width < height ? width : height;
export const heightDevice = width > height ? width : height;

const width_window = Dimensions.get('window').width;
const height_window = Dimensions.get('window').height;
export const widthWindow =
  width_window < height_window ? width_window : height_window;
export const heightWindow =
  width_window > height_window ? width_window : height_window;
export const pixel = (dp) => dp / PixelRatio.get()

export const insets = {
  top: StaticSafeAreaInsets.safeAreaInsetsTop,
  bottom: StaticSafeAreaInsets.safeAreaInsetsBottom,
  left: StaticSafeAreaInsets.safeAreaInsetsLeft,
  right: StaticSafeAreaInsets.safeAreaInsetsRight
}

export function getStatusBarHeight() {
  return Platform.select({
    ios: isNewIpModel() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export const isNewIpModel = () => {
  return (
    listNewIpModel.indexOf(AppInfoManager.getInstance().getAppInfo().model) !==
    -1
  );
};


const listNewIpModel = [
  'iPhone X',
  'iPhone XS',
  'iPhone XR',
  'iPhone XS Max',
  'iPhone 11',
  'iPhone 11 Pro',
  'iPhone 11 Pro Max',
  'iPhone 12',
  'iPhone 12 Pro',
  'iPhone 12 Pro Max',
  'iPhone 13',
  'iPhone 13 Pro',
  'iPhone 13 Pro Max',
  'iPhone 14',
  'iPhone 14 Pro',
  'iPhone 14 Pro Max',
  'iPhone 15',
  'iPhone 15 Pro',
  'iPhone 15 Pro Max',
];

export const hasHomeIndicator = () => isNewIpModel();

export const isNewAndroidModel = () => {
  return (
    IS_ANDROID && AppInfoManager.getInstance().getAppInfo().systemVersion >= 10
  );
};

export const STATUS_BAR_HEIGHT = !IS_ANDROID
  ? hasHomeIndicator()
    ? 44
    : 20
  : StatusBar.currentHeight;