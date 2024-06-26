import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';


const infoSystem = {
  bundleId: DeviceInfo.getBundleId(),
  model: DeviceInfo.getModel(),
  buildNumber: DeviceInfo.getBuildNumber(),
  buildVersion: DeviceInfo.getVersion(),
  systemVersion: DeviceInfo.getSystemVersion(),
};


const CONFIG_ANDROID_TEST = {
  deviceName:
    'Mobile android - ' +
    DeviceInfo.getBrand() +
    '(' +
    DeviceInfo.getSystemVersion() +
    ') - ' +
    DeviceInfo.getModel(),
  deviceId: DeviceInfo.getUniqueId(),
  platform: 2,
  dtId: 6,
  spId: 1,
  deviceType: 2,
  multiscreenKey: 'GLeL9zXE3SuJfK8Gdsm7spRGtDRWzM',
  ...infoSystem,
};

const CONFIG_IOS_TEST = {
  deviceName:
    'Mobile iOS - ' +
    DeviceInfo.getBrand() +
    '(' +
    DeviceInfo.getSystemVersion() +
    ') - ' +
    DeviceInfo.getModel(),
  deviceId: DeviceInfo.getUniqueId(),
  platform: 1,
  dtId: 26,
  spId: 1,
  deviceType: 2,
  multiscreenKey: 'HSnHpmvQVejNNSd6w8w4hDzn5yQAZQ',
  ...infoSystem,
};

export const getConfigDevice = () => {
  switch (Platform.OS) {
    case 'android':
      return CONFIG_ANDROID_TEST;
    // return CONFIG_ANDROID_TEST;
    case 'ios':
      return CONFIG_IOS_TEST;
    default:
      return CONFIG_ANDROID_TEST;
  }
};
