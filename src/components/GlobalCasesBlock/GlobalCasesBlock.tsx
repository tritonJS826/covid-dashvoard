import React from 'react';
import styles from './style.module.scss';
import style from '../App/style.module.scss'

const GlobalCasesBlock = () => (
  <div className={styles.globalcases}>
    <div className={style['App_caption_title']}>Global Cases</div>
    <div className={style['App_caption_quantity']}>50812345</div>
  </div>
);

export default GlobalCasesBlock;
