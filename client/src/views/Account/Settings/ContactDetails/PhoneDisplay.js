import React from 'react'
import { FieldLabel } from '../../../../components/FormComponents';
import { Alert, ErrorMessage, TextButton } from '../../../../components/UIComponents'
import { Switch } from 'antd';

function PhoneDisplay({
  t,
  phoneProps,
  addPhone,
  editPhone,
  removePhone,
  onChangeNotification,
  prevSettings,
  accountError
}) {
  const {
    phone,
    revealPhone,
    setRevealPhone,
    asteriskedPhone,
    getSmsNotification,
    // deletePhone
  } = phoneProps

  return (
    <>
      <FieldLabel>{t('settings.phone')}</FieldLabel>

      {phone ?
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {revealPhone ? <span>{phone}</span> : <span>{asteriskedPhone}</span>}

          <div style={{ display: 'flex' }}>
            {revealPhone ?
              <TextButton onClick={() => setRevealPhone(false)}>
                {t('settings.hide')}
              </TextButton>
              :
              <TextButton onClick={() => setRevealPhone(true)}>
                {t('settings.reveal')}
              </TextButton>
            }
            <TextButton
              style={{ float: 'right' }}
              onClick={removePhone}
            >
              {t('settings.remove')}
            </TextButton>
            <TextButton
              style={{ float: 'right', paddingRight: 0 }}
              onClick={editPhone}>
              {t('settings.edit')}
            </TextButton>
          </div>
        </div>
        :
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>&#8212;</span>
          <TextButton
            onClick={addPhone}
          >
            {t('settings.add')}
          </TextButton>
        </div>
      }

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
        <span>{t('settings.receive_notifications')}</span>
        <Switch
          defaultChecked={getSmsNotification}
          checked={getSmsNotification}
          disabled={!phone}
          onChange={() => onChangeNotification('sms')}
        />
      </div>

      {accountError &&
        accountError === 'ERROR/SET_PHONE_NOTIFICATION_FAILED' &&
        <ErrorMessage type={accountError} />
      }

      {prevSettings &&
        prevSettings.getSmsNotification !== getSmsNotification &&
        <Alert type="success" closable={true} style={{ marginTop: 10 }}>
          {t('success.notification_setting')}
        </Alert>
      }
    </>
  )
}

export default PhoneDisplay