import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

/**
 * Button component.
 *
 * @component
 * @param {React.ReactNode} children
 * @param {Object} props
 * @return {React.ReactNode}
 */
const Button = ({ children, ...props }: ButtonProps) => (
  <button
    {...props}
    className={classNames(
      styles['button'],
      props.className,
    )}
  >
    {children}
  </button>
);

export default Button;
