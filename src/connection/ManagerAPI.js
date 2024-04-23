import Config from '../Config';
import Connector, { TYPE_METHOD } from './Connector';
import AppInfoManager from '../AppInfoManager';

export const URL = {
  getBaseUrl: () => Config.serverHost,
  ping: 'ping',
  product_categories: 'product_categories.json',
};

export const ACCEPT_TYPE = {
  PDF: 'application/pdf',
  EXCEL: 'application/pdf',
};

export const RESPONSE_TYPE = {
  BLOB: 'blob',
};

export default class ManagerAPI {
  static getInstance() {
    if (!this._instance) {
      this._instance = new ManagerAPI();
    }
    return this._instance;
  }
  static clear() {
    if (this._instance) {
      delete this._instance;
    }
  }
  constructor() {
    this.name = 'ManagerAPI';
  }
  // 0. GetConnector
  getConnector = (url) => {
    return new Connector().setUrl(url);
  };
  // Create custom request
  requestCustom = ({
    url,
    method = TYPE_METHOD.GET,
    query = {},
    params = {},
    timeout = 30000,
    useRefreshToken = true,
    useToken = true,
    useCrypto = false,
    dataTmp = {},
  }) => {
    if (!url) {
      return new Promise((res, rej) => {
        res(true);
      });
    }
    return this.getConnector(url, url)
      .setMethod(method)
      .setQuery(query)
      .setParams(params)
      .setTimeOut(timeout)
      .setUseToken(useToken)
      .setUseCrypto(useCrypto)
      .setDataTmp(dataTmp)
      .setUseRefreshToken(useRefreshToken)
      .getPromise();
  };
  //user
  login = ({ email, password }) => {
    return this.getConnector(URL.login)
      .setMethod(TYPE_METHOD.POST)
      .setParams({ email, password })
      .getPromise();
  };

}

export { ManagerAPI };
