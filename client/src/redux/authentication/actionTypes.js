const AuthActionTypes = {
  ERROR_OCCURED: 'ERROR_OCCURED',
  ACCESS_TOKEN_ATTAINED: 'ACCESS_TOKEN_ATTAINED',

  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',

  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  GOOGLE_LOGIN: 'GOOGLE_LOGIN',
  GOOGLE_LOGIN_SUCCESS: 'GOOGLE_LOGIN_SUCCESS',
  PHONE_LOGIN: 'PHONE_LOGIN',

  QR_CODE_RETURNED: 'QR_CODE_RETURNED',
  TWO_FACTOR_ENABLED: 'TWO_FACTOR_ENABLED',
  TWO_FACTOR_DISABLED: 'TWO_FACTOR_DISABLED',

  PASSWORD_RESET_EMAIL_REQUESTED: 'PASSWORD_RESET_EMAIL_REQUESTED',
  PASSWORD_RESET: 'PASSWORD_RESET',

  ACTIVATE_EMAIL_REQUESTED: 'ACTIVATE_EMAIL_REQUESTED',

  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAIL: 'LOGOUT_FAIL',

  VERIFY_SUCCESS: 'VERIFY_SUCCESS',
  VERIFY_FAIL: 'VERIFY_FAIL',
};

export default AuthActionTypes;
