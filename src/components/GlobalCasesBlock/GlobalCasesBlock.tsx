import React from 'react';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

const GlobalCasesBlock = () => (
  <div className={`${appstyles.app_component_block} ${styles.globalcases}`}>
    <div className={appstyles.app_caption_title}>Global Cases</div>
    <div className={`${appstyles.app_caption_quantity} ${appstyles.app_caption_quantity__red}`}>50812345</div>
  </div>
);

export default GlobalCasesBlock;
