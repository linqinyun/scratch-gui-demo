import keyMirror from 'keymirror';

const DONE_NOT_LOGINED = 'scratch-gui/login-state/DONE_NOT_LOGINED'
const DONE_LOGINED = 'scratch-gui/login-state/DONE_LOGINED'
const UserState = keyMirror({

  NOT_LOGINED: null,

  LOGINED: null

});

const UserStates = Object.keys(UserState)

const initialState = {

  error: null,

  userData: null,

  loginState: UserState.NOT_LOGINED

};

const getIsLogined = loginState => (

  loginState === UserState.LOGINED

);

const reducer = function (state, action) {
  // console.log(action)
  if (typeof state === 'undefined') state = initialState;
  switch (action.type) {
    case DONE_NOT_LOGINED:
      if (state.loginState === UserState.NOT_LOGINED) {
        return Object.assign({}, state, {
          loginState: UserState.NOT_LOGINED
        });
      }
    case DONE_LOGINED:
      if (state.loginState === UserState.LOGINED) {
        return Object.assign({}, state, {
          loginState: UserState.LOGINED
        });
      }
    default: return state;
  }


}

export {
  reducer as default,
  initialState as userStateInitialState,
  UserStates,
  getIsLogined
};
