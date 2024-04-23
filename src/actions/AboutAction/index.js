import ManagerAPI from '../../connection/ManagerAPI';
import { REQUEST_TYPE } from '../ActionTypes';
import { createrAction } from '../RAction';
import { getActionAPI } from '../UtilAction';

const { GET_TERM_SERVICE } = REQUEST_TYPE;

const Actions = createrAction({
  actionName: 'AboutAction',
  actionListApi: [GET_TERM_SERVICE],
});

const getTerm = (onAfterError, visibleSpin) => {
  return getActionAPI({
    Actions,
    onAfterError,
    visibleSpin,
    actionName: GET_TERM_SERVICE,
    promiseApi: async () => {
      return ManagerAPI.getInstance().getTermOfService();
    },
  });
};
export default {
  getTerm,

};
