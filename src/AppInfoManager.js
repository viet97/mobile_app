import { getConfigDevice } from './ConfigDevice';
import { getStateForKeys } from './utils/Util';

const appInfo = {
  platform: getConfigDevice().platform,
  spId: getConfigDevice().spId,
  dtId: getConfigDevice().dtId,
  deviceType: getConfigDevice().deviceType,
  model: getConfigDevice().model,
  systemVersion: getConfigDevice().systemVersion,
  deviceId: getConfigDevice().deviceId,
  deviceName: getConfigDevice().deviceName,
  code_push_staging_ios: 'dUGQMCtTaaqy2U5RyYi673I911Dn7EhA5ARL1',
  code_push_production_ios: '554WENtFqnnR3e2NFFMBglb_F8BXHCpcsR274',
  code_push_staging_android: 'POzpUJsTa9zly8rLzFFMnxwRdJwRpVdigXEUq',
  code_push_production_android: 'JcG3KTweiNXA7LIiLmaDLa2Vsn0cfyt_KMWGs',
  code_push_auto_android: 'RRn7fN_Cj9B46KEHc1-n6btLHmfvdDr9IPYPb',
  code_push_auto_ios: 'hkqsOzlSZSyE733DaB0ZKP5rBzVxv4_tUJX79',
};

export default class AppInfoManager {
  static getInstance(store) {
    if (!this._instance) {
      this._instance = new AppInfoManager(store);
    }
    return this._instance;
  }
  static clear() {
    if (this._instance) {
      delete this._instance;
    }
  }
  constructor(store) {
    this.store = store;
    this._init();
  }

  setStore = (store) => {
    if (!store) {
      return;
    }
    this.store = store;
  };

  getStore = () => {
    return this.store;
  };

  isLogin = () => {
    if (!this.store) { return; }

  }

  _init() {
  }

  getStateRedux(keys = []) {
    if (!this.store) {
      return;
    }
    return getStateForKeys(this.store.getState(), keys);
  }


  getAccessToken = () => {
    if (!this.getStore()) { return; }
    const accessToken = getStateForKeys(this.getStore().getState(), ['User', 'accessToken']);
    return accessToken;
  }

  getUid = () => {
    if (!this.getStore()) { return; }
    const uid = getStateForKeys(this.getStore().getState(), ['User', 'uid']);
    return uid;
  }

  getTokenType = () => {
    if (!this.getStore()) { return; }
    const tokenType = getStateForKeys(this.getStore().getState(), ['User', 'tokenType']);
    return tokenType;
  }

  exitApp() { }

  getDeviceName() {
    return getConfigDevice().deviceName;
  }

  getDeviceId() {
    return getConfigDevice().deviceId;
  }


  getAppInfo() {
    return appInfo;
  }

}
