let BuildRelease = false;
let BuildDeploy = false;

const DebugLog = true;
const LoggerRedux = true;
const DebugLogin = true;
export const locale = {
  vi: 'vi',
  en: 'en',
};

const debugBaseUrl = 'https://apibeta.podfoods.co/';
const productionBaseUrl = 'https://api.podfoods.co/';

const debugDomain = 'https://beta.podfoods.co';
const productionDomain = 'https://podfoods.co';


const Config = {
  buildRelease: BuildRelease,
  buildDeploy: !BuildRelease ? false : BuildDeploy,
  debug: BuildRelease ? false : DebugLog,
  useLoggerRedux: BuildRelease ? false : LoggerRedux,
  levelLog: 0,
  serverHost: BuildRelease && BuildDeploy ? productionBaseUrl : debugBaseUrl,
  domain: BuildRelease && BuildDeploy ? productionDomain : debugDomain,
  productionDomain,
  debugLogin: BuildRelease ? false : DebugLogin,
  useCodePush: !BuildDeploy,
};

export default Config;
