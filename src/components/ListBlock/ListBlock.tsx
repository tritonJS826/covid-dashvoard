import React from 'react';
import List from '../List';
import styles from './style.module.scss';

const ListBlock = () => (
  <div className={styles.ListBlock}>
    <div className={styles['ListBlock-title']}>Cases by Country/Region/Sovereignty</div>
    <List />
  </div>
);

export default ListBlock;
