import React, { HTMLProps, ChangeEvent } from 'react';

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  id: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({ id, label, ...props }: TextAreaProps): JSX.Element {
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <textarea id={id} {...props} />
    </label>
  );
}
