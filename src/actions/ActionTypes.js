const encodeString = (str, isRequire = false) => {
  if (isRequire) {
    return str;
  }
  return str;
};

export const REQUEST_TYPE = {
  //About
  GET_TERM_SERVICE: encodeString('GET_TERM_SERVICE'),

};

export const REQUEST_SUBTYPE = {
  REQUEST: encodeString('OnRequest'),
  ERROR: encodeString('OnError'),
  SUCCESS: encodeString('OnSuccess'),
};

export const NORMAL_TYPE = {
  CHANGE_LANGUAGE: encodeString('CHANGE_LANGUAGE'),
};

export const NAVIGATION_ACTION = {
  NAVIGATE: encodeString('@@TcoN.D/Navigate'),
  GO_BACK: encodeString('@@TcoN.D/GoBack'),
  INIT: encodeString('@@TcoN.D/Init'),
  RESET: encodeString('@@TcoN.D/Reset'),
};

const ActionTypes = {
  NAVIGATION_ACTION,
  REQUEST_TYPE,
  REQUEST_SUBTYPE,
  NORMAL_TYPE,
};

export default ActionTypes;
