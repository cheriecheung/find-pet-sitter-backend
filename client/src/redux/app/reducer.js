import Immutable from 'seamless-immutable';
import AppActionTypes from './actionTypes'

const initialState = Immutable({
  appActionStatus: '',
  language: 'en',
  isLoggedIn: false,
  toggleMobileMenu: false
});

const app_reducer = {
  app: (state = initialState, action) => {
    switch (action.type) {
      case AppActionTypes.CHANGE_LANGUAGE:
        return { ...state, language: action.payload };
      case AppActionTypes.TOGGLE_MOBILE_MENU:
        return { ...state, toggleMobileMenu: action.payload }
      case AppActionTypes.PASSWORD_RESET:
        return { ...state, appActionStatus: 'resetPasswordSuccess' }
      case AppActionTypes.QR_CODE_RETURNED:
        return { ...state, qrCode: action.payload }
      case AppActionTypes.TWO_FACTOR_ENABLED:
        return { ...state, appActionStatus: 'enable2FASuccess' }
      case AppActionTypes.TWO_FACTOR_DISABLED:
        return { ...state, appActionStatus: 'disable2FASuccess' }
      default:
        return state;
    }
  }
}

export default app_reducer