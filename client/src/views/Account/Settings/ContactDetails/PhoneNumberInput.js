import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { ContainedButton, ErrorMessage } from '../../../../components/UIComponents'

function PhoneNumberInput({ t, phoneNumberInputProps, accountError }) {
  const {
    inputPhoneNumber,
    setInputPhoneNumber,
    onSubmitPhoneNumber
  } = phoneNumberInputProps

  return (
    <div style={{ textAlign: 'center' }}>
      <i className="fas fa-mobile-alt fa-4x mb-3" />

      <p>{t('settings.receive_sms_code')}</p>
      <p>{t('settings.save_phone_description')}</p>

      <PhoneInput
        country={'nl'}
        value={inputPhoneNumber}
        onChange={phone => setInputPhoneNumber(phone)}
        placeholder=""
        className="phone-input"
      />
      {accountError && <ErrorMessage type={accountError} />}

      <br />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ContainedButton type="button" onClick={onSubmitPhoneNumber}>
          {t('form.submit')}
        </ContainedButton>
      </div>
    </div>
  )
}

export default PhoneNumberInput