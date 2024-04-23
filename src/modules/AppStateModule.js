import { EmitterManager } from './EmitterManager';
import { AppState } from 'react-native';

const APP_STATE_TYPE = {
  ACTIVE: 'active',
  IN_ACTIVE: 'inactive',
  BACK_GROUND: 'background',
};

const AppStateModule = {
  previousAppState: AppState.currentState,
  appState: AppState.currentState,
  isActive: () => AppState.currentState === APP_STATE_TYPE.ACTIVE,
  isInActive: () => AppState.currentState === APP_STATE_TYPE.IN_ACTIVE,
  isBackground: () => AppState.currentState === APP_STATE_TYPE.BACK_GROUND,
  isComeForegroundFromBackground: () =>
    AppStateModule.previousAppState === APP_STATE_TYPE.BACK_GROUND &&
    AppStateModule.isActive(),
};

AppState.addEventListener('change', state => {
  if (state !== AppStateModule.appState) {

    AppStateModule.previousAppState = AppStateModule.appState;
    AppStateModule.appState = state;
    EmitterManager.getInstance().emit(
      EmitterManager.listEvent.APP_STATE_CHANGE,
      state,
    );
  }
});

export default AppStateModule;
