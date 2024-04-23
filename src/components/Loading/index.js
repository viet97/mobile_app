import React from 'react';
import { View, StyleSheet } from 'react-native';

import LoadingManager from './LoadingManager';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIndicator } from 'react-native-indicators';
import Modal from "react-native-modal"
import BaseComponent from '../BaseComponent';
import { EmitterManager } from '../../modules/EmitterManager';
import { insets, IS_ANDROID } from '../../utils/DeviceUtil';
import { Colors } from '../../themes/Colors';
import Text from '../Text';

class Loading extends BaseComponent {
  constructor(props) {
    super(props);
    this.displayName = 'Loading';
    this.state = {
      loading: false,
      loadingModal: false,
    };
    LoadingManager.getInstance().isVisible = false;
    LoadingManager.getInstance().isVisibleModal = false;
  }

  _componentDidMount() {
    EmitterManager.getInstance().on(
      EmitterManager.listEvent.LOADING_GLOBAL_ON_OFF,
      this._visible,
    );

    EmitterManager.getInstance().on(
      EmitterManager.listEvent.LOADING_MODAL_GLOBAL_ON_OFF,
      this._visibleModal,
    );
  }

  _componentWillUnmount() {
    EmitterManager.getInstance().off(
      EmitterManager.listEvent.LOADING_GLOBAL_ON_OFF,
      this._visible,
    );

    EmitterManager.getInstance().on(
      EmitterManager.listEvent.LOADING_MODAL_GLOBAL_ON_OFF,
      this._visibleModal,
    );
  }

  _visible = (loading = true, props = {}) => {
    LoadingManager.getInstance().isVisible = loading;
    const loadingText = props?.loadingText
    this.setState({ loading, loadingText });
  };


  _visibleModal = (loadingModal = true, props = {}) => {
    LoadingManager.getInstance().isVisibleModal = loadingModal;
    const loadingText = props?.loadingText
    this.setState({ loadingModal, loadingText });
  };

  renderContent() {
    const { loading, loadingText } = this.state;
    const isShow = loading || this.props.loading;
    let containerStyle = {
      ...StyleSheet.absoluteFill,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.backgroundLoading,
      bottom: -insets.bottom,
    };

    if (this.isLoadingVideo) {
      containerStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        width: 33,
        height: 33,
      };
    }
    return (
      <>
        {isShow ? <SafeAreaView
          accessibilityLabel={'Loading'}
          style={containerStyle}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIndicator color={Colors.mainColor} size={40} />
          </View>
          {loadingText ?
            <Text style={{ color: Colors.bottom_title, marginTop: 8 }}>
              {loadingText}
            </Text>
            :
            <>
              <Text style={{ color: Colors.bottom_title, marginTop: 8 }}>
                Loading.
              </Text>
              <Text style={{ color: Colors.bottom_title }}>
                Please wait...
              </Text>
            </>}
        </SafeAreaView> : null}
        <Modal
          useNativeDriver={IS_ANDROID}
          style={{ flex: 1 }}
          isVisible={this.state.loadingModal}
          animationInTiming={1}
          animationOutTiming={1}
          backdropOpacity={0.5}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIndicator color={Colors.mainColor} size={40} />
          </View>
          {loadingText ?
            <Text style={{ color: Colors.bottom_title, marginTop: 8 }}>
              {loadingText}
            </Text>
            :
            <>
              <Text style={{ color: Colors.bottom_title, marginTop: 8 }}>
                Loading.
              </Text>
              <Text style={{ color: Colors.bottom_title }}>
                Please wait...
              </Text>
            </>}
        </Modal>
      </>
    );
  }
}


export default Loading;
