import actionProxy from './serviceProxy';

import common from './common';
import login from './login';

export default {
  common,
  login: actionProxy(login)
};