export default function(state = {}, action) {
    switch (action.type) {
      case 'LOGIN_FULFILLED':
      return{...state,"userLogged":action.payload}
      case 'REGISTER_FULFILLED':
      return{...state,"userRegister":action.payload}
      default:
        return state;
    }
  }