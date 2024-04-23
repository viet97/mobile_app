function convertToNumber(item) {
  if (item === null || item === undefined) {
    return 0;
  }
  const number = Number(item);
  if (number === NaN) {
    return 0;
  }
  return number;
}


export const getStateForKeys = (
  state = {},
  keys = [],
  defaultValue = undefined
) => {
  const length = keys.length;
  if (length === 0 || !state || Object.keys(state).length === 0) {
    return defaultValue;
  }
  let output = state;

  if (!output) {
    return defaultValue;
  }
  for (let i = 0; i < length; i++) {
    if (i === 0 || !output.get) {
      // rootReducer is plainObject
      output = output[keys[i]];
    } else {
      // subreducer is Immutable Map
      output = output.get(keys[i]);
    }

    if (!output) {
      return defaultValue;
    }
  }

  return output;
};

export const checkKeyExistObject = (obj = {}, keys = []) => {
  const length = keys.length;
  if (!obj || length === 0 || Object.keys(obj).length === 0) {
    return false;
  }
  let output = obj;
  for (let i = 0; i < length; i++) {
    output = output[keys[i]];
    if (!output) {
      return false;
    }
  }
  if (!output) {
    return false;
  }
  return true;
};

export const getValueFromObjectByKeys = (
  obj = {},
  keys = [],
  defaultValue = undefined
) => {
  const length = keys.length;
  if (!obj || length === 0 || Object.keys(obj).length === 0) {
    return defaultValue;
  }
  let output = obj;
  for (let i = 0; i < length; i++) {
    output = output[keys[i]];
    if (output === 0) {
      return 0;
    }
    if (!output) {
      return defaultValue;
    }
  }
  if (output === 0) {
    return 0;
  }
  if (!output) {
    return defaultValue;
  }
  return output || defaultValue;
};


const Util = {
  getStateForKeys,
  checkKeyExistObject,
  getValueFromObjectByKeys,
  convertToNumber,
};

export default Util;
