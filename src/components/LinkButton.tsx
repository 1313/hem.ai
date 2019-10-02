import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cx } from 'emotion';

interface LinkButtonProps extends LinkProps {
  variant?: string;
}
export function LinkButton({
  className,
  ...props
}: LinkButtonProps): JSX.Element {
  return <Link {...props} className={cx('link-button', className)} />;
}
