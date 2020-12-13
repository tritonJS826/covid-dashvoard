import React from 'react';
import styles from './style.module.scss';

const GlobalCasesBlock = () => (
  <div className={styles.GlobalCases}>
    <div className={styles['GlobalCases-title']}>Global Cases</div>
    <div className={styles['GlobalCases-cases']}>50812345</div>
  </div>
);

export default GlobalCasesBlock;
