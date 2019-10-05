import React, { HTMLProps, ChangeEvent } from 'react';

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
  id,
  label,
  ...props
}: TextInputProps): JSX.Element {
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input id={id} type="text" {...props} />
    </label>
  );
}
