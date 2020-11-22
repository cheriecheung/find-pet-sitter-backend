import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyGoogleAuthenticatorCode } from '../../../../redux/actions/authenticationActions'
import { FieldLabel, TextField } from '../../../../components/FormComponents';
import { ContainedButton, Image, ImageContainer } from '../../../../components/UIComponents';
import styled from 'styled-components'

import { useForm, FormProvider } from 'react-hook-form';

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  margin-bottom: 0;
  flex: 50%;
`;

function Enable2FA() {
  const dispatch = useDispatch();
  const { qrCode } = useSelector((state) => state.two_factor_auth);

  const methods = useForm();
  const { handleSubmit, watch } = methods;

  const [qrCodeImage, setQrCodeImage] = useState('')

  const onSubmit = (data) => {
    console.log({ data })
  }

  useEffect(() => {
    if (qrCode) {
      setQrCodeImage(qrCode)
    }
  }, [qrCode])

  const onVerifyCode = () => {
    console.log(watch('verificationCode'))
    const code = watch('verificationCode')
    dispatch(verifyGoogleAuthenticatorCode(code))
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'left' }}>

        <p>Make your account safer in three easy steps:</p>

        <Section>
          <ImageContainer>
            <Image url="https://whooptous.com/wp-content/uploads/2020/05/unnamed.png" />
          </ImageContainer>
          <Description>
            <FieldLabel>1. Download an authenticator app</FieldLabel>
            <p>
              Download and install <a href="https://support.google.com/accounts/answer/1066447?hl=en">Google Authenticator</a> for your phone or tablet.
                         </p>
          </Description>
        </Section>

        <hr style={{ marginTop: '-10px' }} />

        <Section>
          <ImageContainer>
            <Image url={qrCodeImage} />
          </ImageContainer>
          <Description>
            <FieldLabel>2. Scan the QR code</FieldLabel>
            <p>
              Open the authenticator app and scan the image to the left using your phone's camera.
             </p>
          </Description>
        </Section>

        <hr />

        <Section>
          <ImageContainer>
            <i className="fas fa-mobile-alt fa-4x mb-3" />
          </ImageContainer>
          <Description>
            <FieldLabel>3. Login with your code</FieldLabel>
            <p>Enter the 6-digit verification code generated.</p>
            <TextField name="verificationCode" placeholder="000 000" />
            <ContainedButton onClick={onVerifyCode}>Activate</ContainedButton>
          </Description>
        </Section>
      </form>
    </FormProvider>
  )
}

export default Enable2FA

export function EnableSuccess({ closeModal }) {
  return (
    <>
      <i className="far fa-check-circle fa-3x" />
      <br />
      <br />
      <p>You have successfully activated 2FA</p>
      <button onClick={() => {
        closeModal && closeModal()
      }}>OK</button>
    </>
  )
}