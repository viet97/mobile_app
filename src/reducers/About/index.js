import Immutable from 'immutable';

const initState = Immutable.fromJS({
  quoc: "123"
});

export default (state = initState, action) => {
  switch (action.key) {
    // case NORMAL_TYPE.SWITCH_MODE:
    //   return initState;
    // case REQUEST_TYPE.GET_PRIVACY:
    //   switch (action.subType) {
    //     case REQUEST_SUBTYPE.SUCCESS:
    //       myLog('REQUEST_TYPE.GET_PRIVACY', action.data);
    //       const privacy = getValueFromObjectByKeys(action, [
    //         'data',
    //         'data',
    //         'privacy_policy',
    //         'content',
    //       ]);
    //       return state.setIn(['privacy'], privacy);
    //     default:
    //       return state;
    //   }
    default:
      return state;
  }
};
