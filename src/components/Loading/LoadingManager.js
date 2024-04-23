import React from 'react';
import { View } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import { EmitterManager } from '../../modules/EmitterManager';
import { Colors } from '../../themes/Colors';
import Text from '../Text';

export default class LoadingManager {
  static getInstance() {
    if (!this._instance) {
      this._instance = new LoadingManager();
    }
    return this._instance;
  }

  static clear() {
    if (this._instance) {
      this._instance.destroy();
      delete this._instance;
    }
  }

  constructor() {
    this.displayName = 'LoadingManager';
    this._isVisible = false;
  }

  set isVisible(isVisible) {
    this._isVisible = isVisible;
  }

  get isVisible() {
    return this._isVisible;
  }

  renderInnerLoading = (props) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIndicator color={props?.indicatorColor || Colors.BLUE} size={40} />
        </View>
        <Text style={{ color: Colors.white, marginTop: 8 }}>
          Loading.
        </Text>
        <Text style={{ color: Colors.white }}>
          Please wait...
        </Text>
      </View>
    );
  }

  visibleLoading(isVisible = true, props) {
    requestAnimationFrame(() =>
      EmitterManager.getInstance().emit(
        EmitterManager.listEvent.LOADING_GLOBAL_ON_OFF,
        isVisible,
        props
      ),
    );
  }
  visibleLoadingModal(isVisibleModal = true, props) {
    requestAnimationFrame(() =>
      EmitterManager.getInstance().emit(
        EmitterManager.listEvent.LOADING_MODAL_GLOBAL_ON_OFF,
        isVisibleModal,
        props
      ),
    );
  }

  destroy() {
    this._isVisible = false;
  }
}
