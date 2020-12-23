import React from 'react';
import styles from './style.module.scss';

interface Props {
  string: string;
  number: number;
}

const RecoveryListLine: React.FC<Props> = ({ string, number }) => (
  <div className={styles.recoverylistline}>
    {string}
    <div className={styles.line__green}>recovery</div>
    {number}
  </div>
);

export default RecoveryListLine;
