import React from 'react';
import styles from './style.module.scss';
import appstyle from '../App/style.module.scss';

const GlobalCasesBlock = () => (
  <div className={styles.globalcases}>
    <div className={appstyle.app_caption_title}>Global Cases</div>
    <div className={`${appstyle.app_caption_quantity} ${appstyle.app_caption_quantity__red}`}>50812345</div>
  </div>
);

export default GlobalCasesBlock;
