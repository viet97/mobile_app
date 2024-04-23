import Emitter from './Emitter';

const LIST_EVENT = {
  PING_SERVER_EMITTER: 'ping_server_emitter',
  //SIN
  LOADING_GLOBAL_ON_OFF: 'loading_on_off',
  LOADING_MODAL_GLOBAL_ON_OFF: 'loading_modal_on_off',
  //orientation
  ORIENTATION_DID_CHANGE: 'orientation_did_change',
  DEVICE_ORIENTATION_DID_CHANGE: 'device_orientation_did_change',
  //network
  NETWORK_CHANGE: 'network_change',
  //appstate
  APP_STATE_CHANGE: 'app_state_change',
  //EVENT CHANGE
  CHANGE_SCREEN: 'CHANGE_SCREEN',

  //CollapisbleView
  SIGN_IN_OUT: 'SIGN_IN_OUT',
  BEFORE_SIGN_OUT: 'BEFORE_SIGN_OUT',
  GO_TO_PAGE_SCROLL_TAB: 'GO_TO_PAGE_SCROLL_TAB',
};

export class EmitterManager {
  static getInstance() {
    if (!this._instance) {
      this._instance = new EmitterManager();
    }
    return this._instance;
  }

  static clear() {
    if (this._instance) {
      delete this._instance;
    }
  }

  static listEvent = LIST_EVENT;

  emit(eventName, ...args) {
    if (!eventName) {
      return;
    }
    return Emitter.emit(eventName, ...args);
  }

  on(eventName, cb) {
    if (!eventName || !cb) {
      return;
    }
    Emitter.on(eventName, cb);
  }

  off(eventName, cb) {
    if (!eventName) {
      return;
    }
    Emitter.off(eventName, cb);
  }

  once(eventName, cb, ctx) {
    if (!eventName || !cb) {
      return;
    }
    Emitter.once(eventName, cb, ctx);
  }
}
