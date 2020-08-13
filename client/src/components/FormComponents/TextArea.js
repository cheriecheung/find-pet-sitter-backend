import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export default function TextArea({ name, placeholder, rows = 10 }) {
  const { control, errors } = useFormContext();

  return (
    // no Controller needed for uncontrolled component

    <Controller
      name={name}
      as={
        <textarea
          placeholder={placeholder}
          rows={rows}
          className="form-control"
          style={{ resize: 'none' }}
        />
      }
      control={control}
    />
  );
}
