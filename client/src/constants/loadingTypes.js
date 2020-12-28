const LOADING = {
  // for account actions
  SUBMIT_PHONE_NUMBER: 'LOADING/SUBMIT_PHONE_NUMBER',
  SEND_SMS_OTP: 'LOADING/SEND_SMS_OTP',
  VERIFY_PHONE_NUMBER: 'LOADING/VERIFY_PHONE_NUMBER',
  SAVE_PERSONAL_INFO: 'LOADING/SAVE_PERSONAL_INFO',
  REMOVE_PROFILE_PICTURE: 'LOADING/REMOVE_PROFILE_PICTURE',
  SAVE_SITTER: 'LOADING/SAVE_SITTER',
  SAVE_OWNER: 'LOADING/SAVE_OWNER',
  REMOVE_CAT_PHOTO: 'LOADING/REMOVE_CAT_PHOTO',

  // for bookings actions
  SEND_BOOKING_REQUEST: 'LOADING/SEND_BOOKING_REQUEST',
  GET_BOOKINGS_RECORDS: 'LOADING/GET_BOOKINGS_RECORDS',
  FULFILL_ACTION: 'LOADING/FULFILL_ACTION',

  // for payment actions
  SETUP_PAYOUTS: 'LOADING/SETUP_PAYOUTS',

  // for app actions
  REGISTER: 'LOADING/REGISTER',
  CHANGE_PASSWORD: 'LOADING/CHANGE_PASSWORD',
  RESET_FORGOT_PASSWORD: 'LOADING/RESET_FORGOT_PASSWORD',
  ENABLE_2FA: 'LOADING/ENABLE_2FA',
  DISABLE_2FA: 'LOADING/DISABLE_2FA',

  // for auth actions
  GOOGLE_LOGIN: 'LOADING/GOOGLE_LOGIN',
  PHONE_LOGIN: 'LOADING/PHONE_LOGIN',
  LOCAL_LOGIN: 'LOADING/LOCAL_LOGIN'
}

export default LOADING;