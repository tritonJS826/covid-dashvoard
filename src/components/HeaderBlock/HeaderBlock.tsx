import React from 'react';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

const HeaderBlock = () => (
  <div className={`${appstyles.app_component_block} ${styles.headerblock}`}>
    <div className={styles.headerblock_title}>
      COVID-19 Dashboard by the Center for Systems Science and Engineering (CSSE)
      at Johns Hopkins University (JHU)
    </div>
  </div>
);

export default HeaderBlock;
