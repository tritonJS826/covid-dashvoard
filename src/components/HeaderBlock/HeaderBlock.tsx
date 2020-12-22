import React from 'react';
import styles from './style.module.scss';

const HeaderBlock = () => (
  <div className={styles.headerblock}>
    <div className={styles.headerblock_wrapper}>
      <div className={styles.headerblock_title}>
        COVID-19 Dashboard by the Center for Systems Science and Engineering (CSSE)
        at Johns Hopkins University (JHU)
      </div>
    </div>
  </div>
);

export default HeaderBlock;
