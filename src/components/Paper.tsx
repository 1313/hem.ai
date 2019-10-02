import React, { HTMLProps } from 'react';
import { cx } from 'emotion';

interface PaperProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export function Paper({ className, ...props }: PaperProps): JSX.Element {
  return <div className={cx('paper', className)} {...props} />;
}
