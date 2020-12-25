import React from 'react';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

const HeaderBlock = () => (
  <div className={`${appstyles.app_component_block} ${styles.headerblock}`}>
    <div className={styles.headerblock_title}>
      Covid dashbord app. Double click to expand block!
    </div>
  </div>
);

export default HeaderBlock;
