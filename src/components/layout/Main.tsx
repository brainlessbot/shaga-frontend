import React from 'react';
import styles from './Main.module.scss';

type MainProps = {
  children: React.ReactNode,
};

/**
 * Main component.
 *
 * @component
 * @param {React.ReactNode} children
 * @return {React.ReactNode}
 */
const Main = ({ children }: MainProps) => (
  <main className={styles['container']}>
    {children}
  </main>
);

export default Main;
