import React from 'react';
import DeathListLine from '../DeathListLine';
import DeseaseListLine from '../DeseaseListLine';
import RecoveryListLine from '../RecoveryListLine';
import styles from './style.module.scss';

const TableBlock = () => (
  <div className={styles.TableBlock}>
    <DeathListLine />
    <DeseaseListLine />
    <RecoveryListLine />
  </div>
);

export default TableBlock;
