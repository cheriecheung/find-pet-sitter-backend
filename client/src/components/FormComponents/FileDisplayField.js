import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const { REACT_APP_API_DOMAIN } = process.env;

const ImageContainer = styled.div`
    width: 120px; 
    height: 120px;
    border-radius: 10px;
    overflow: hidden; 
    background: url(${props => props.image}) no-repeat center center / cover;
`

const RemoveButton = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
  opacity: ${(props) => (props.hide ? 0 : 1)};
  display: flex;
  justify-content: center;
`;

const RemoveText = styled.span`
    color: #fff;
    align-self: center;
`

function FileDisplayField({ name, fileName, handleRemovePhoto }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={() =>
                <Display
                    fileName={fileName}
                    handleRemovePhoto={handleRemovePhoto}
                />
            }
        />
    )
}

export default FileDisplayField

function Display({ fileName, handleRemovePhoto }) {
    const { t } = useTranslation();

    const [hideRemove, setHideRemove] = useState(true);

    const photoURL = fileName.includes('base64') ? fileName : `${REACT_APP_API_DOMAIN}/image/${fileName}`

    return (
        <div style={{ display: 'flex' }}>
            <ImageContainer
                onMouseOver={() => setHideRemove(false)}
                onMouseLeave={() => setHideRemove(true)}
                image={photoURL}
            >
                <RemoveButton type="button" onClick={handleRemovePhoto} hide={hideRemove}>
                    <RemoveText>Remove</RemoveText>
                </RemoveButton>
            </ImageContainer>
        </div>
    )
}

FileDisplayField.propTypes = {
    name: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    handleRemovePhoto: PropTypes.func.isRequired
};

Display.propTypes = {
    fileName: PropTypes.string.isRequired,
    handleRemovePhoto: PropTypes.func.isRequired
};