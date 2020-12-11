import React from 'react';
import List from '../List/List';
import styles from './style.module.scss';

const DeathListLine = () => (
  <div className={styles.DeathListLine}>
    <div>
      <div className={styles['DeathListLine-caption']}>
        <div className={styles['DeathListLine-title']}>Global Deaths</div>
        <div className={styles['DeathListLine-quantity']}>1234567</div>
      </div>
    </div>
    <List />
  </div>
);

export default DeathListLine;
