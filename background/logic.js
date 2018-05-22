import { createLogic } from 'redux-logic';
import sleep from 'await-sleep';

export default createLogic({
  type: 'LOGIN',
  cancelType: 'CANCEL_LOGIN',
  latest: true,
  process: async ({ getState, action }, dispatch, done) => {
    dispatch({ type: 'LOADING' });

    // similuate server response time
    await sleep(3000);

    let { account } = getState();
    let { username, password } = action.payload;

    // example of validation
    if (account.username === username && account.password === password) {
      dispatch({ type: 'SUCCESS' });
    } else {
      dispatch({ type: 'ERROR' });
    }

    done();
  },
});
