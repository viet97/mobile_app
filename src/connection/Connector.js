/* eslint-disable no-unused-vars */
import axios from 'axios';
import { getValueFromObjectByKeys } from '../utils/Util';
import { NetworkModule } from '../modules/NetworkStateModule';


const ConfigAxiosDefault = {
  validateStatus: (status) => {
    return status >= 200 && status <= 600;
  },
};

export const TYPE_METHOD = {
  GET: 'GET',
  POST: 'POST',
  OPTION: 'OPTION',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const STATUS_CODE = {
  SUCCESS: 200,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  UNAUTHORIZE: 401,
  SERVER: 497,
  LOCK_KPLUS: 408,
  CREATED: 201,
  BAD_REQUEST: 400,
  TOKEN_EXPIRED: 406,
  UNKNOWN_ERROR: 520,
  FORBIDDEN: 403,
  SIGNATURE_ERROR: 411,
  USER_BLOCK: 412,
  DEVICE_BLOCK: 413,
  REQUIRE_LOGIN: 402,
  NOT_FOUND: 404,
  VALIDATED_FAILED: 422,
  INTERNAL_ERROR: 500,
};

export const ERROR_CODE = {
  AXIOS: { errorCode: 1, errorNameCS: 'AXIOS' },
  SERVER: { errorCode: 2, errorNameCS: 'SERVER' },
  PARSE_DATA: { errorCode: 3, errorNameCS: 'PARSE_DATA' },
  NO_INTERNET: { errorCode: 4, errorNameCS: 'NO_INTERNET' },
  OTHER: { errorCode: 5, errorNameCS: 'OTHER' },
  TIMEOUT: 'ECONNABORTED',
};

const ConfigDefault = {
  url: '',
  token: '',
  method: TYPE_METHOD.GET,
  useToken: true,
  useRefreshToken: true,
  timeout: 30000,
  query: {},
  params: {},
  dataTmp: {},
  acceptCancelRequest: true,
};

export default class Connector {
  constructor() {
    this._init();
  }

  _init() {
    Object.keys(ConfigDefault).map((row) => {
      this[row] = ConfigDefault[row];
    });
  }
  // Set Url for request
  setUrl(url) {
    this.url = url;
    return this;
  }

  setAcceptCancelRequest(isAcceptCancelRequest) {
    this.acceptCancelRequest = isAcceptCancelRequest;
    return this;
  }

  setAcceptType = (accept) => {
    this.accept = accept;
    return this;
  };

  setContentType = (contentType) => {
    this.contentType = contentType;
    return this;
  };

  setResponseType = (responseType) => {
    this.responseType = responseType;
    return this;
  };

  setTimeOut(timeout) {
    this.timeout = timeout;
    return this;
  }

  setAccessToken(token) {
    this.token = token;
    return this;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setUseToken(useToken) {
    this.useToken = useToken;
    return this;
  }

  setUseRefreshToken(useRefreshToken) {
    this.useRefreshToken = useRefreshToken;
    return this;
  }

  setQuery(query) {
    this.query = query;
    return this;
  }

  setParams(params) {
    this.params = params;
    return this;
  }

  setSessionKey(sessionKey) {
    this.sessionKey = sessionKey;
    return this;
  }

  setDataTmp(dataTmp) {
    this.dataTmp = dataTmp;
    return this;
  }

  setSession(session) {
    this.session = session;
    return this;
  }

  async getPromise() {
    return await this._fetchDataHttp();
  }

  getHeaderSetup = () => {
    const headers = {
      Accept: this.accept || 'application/json',
      'Content-Type': this.contentType || 'application/json',
    };

    return headers;
  };

  async _fetchDataHttp() {
    const headers = this.getHeaderSetup();

    const inputData = {
      method: this.method,
      url: this.url,
      params: this.query,
      headers: headers,
      ...ConfigAxiosDefault,
      timeout: this.contentType !== 'multipart/form-data' ? 30000 : 0,
    };

    if (this.responseType) {
      inputData.responseType = this.responseType;
    }

    if (this.method !== TYPE_METHOD.GET) {
      inputData.data = this.params;
    }
    console.log('----inputData---', inputData, this.query, this.params);
    const arg = {
      arg: {
        url: this.url,
        params: this.params,
        query: this.query,
      },
    };
    try {
      if (!NetworkModule.isConnected) {
        throw {
          code: ERROR_CODE.TIMEOUT,
        };
      }
      const response = await axios(inputData);
      console.log('---response---', response);
      const data = getValueFromObjectByKeys(response, ['data']);


      if (data === null) {
        throw {
          ...ERROR_CODE.PARSE_DATA,
        };
      }


      if (data === null) {
        throw {
          ...ERROR_CODE.PARSE_DATA,
          ...arg,
        };
      }
      switch (response.status) {
        case STATUS_CODE.SUCCESS:
        case STATUS_CODE.NO_CONTENT:
        case STATUS_CODE.CREATED:
        case STATUS_CODE.ACCEPTED:
          return {
            status: response.status,
            arg: {
              url: this.url,
              params: this.params,
              query: this.query,
            },
            data,
          };
        case STATUS_CODE.UNAUTHORIZE:
          //force sign out
          throw null;
        case STATUS_CODE.NOT_FOUND:
          throw {
            statusCode: response.status,
            ...arg,
          };
        default:
          throw {
            statusCode: response.status,
            ...data,
            ...ERROR_CODE.OTHER,
            ...arg,
          };
      }
    } catch (error) {
      console.log('---error---', error, inputData);
      switch (error.code) {
        case ERROR_CODE.TIMEOUT.errorCode:
          throw error;
        default:
          throw {
            ...error,
            ...ERROR_CODE.OTHER,
            ...arg,
          };
      }
    }
  }
}
