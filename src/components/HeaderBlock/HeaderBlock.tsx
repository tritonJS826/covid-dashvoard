import React from 'react';
import logo from '../../logo.svg';
import styles from './style.module.scss';
// import Burger from '../Burger';

const HeaderBlock = () => (
  <div className={styles.headerblock}>
    <div className={styles.headerblock_wrapper}>
      <a className={styles.headerblock_logo} href="https://systems.jhu.edu/research/public-health/ncov/"><img src={logo} className={styles.headerblock_logo} alt="logo" /></a>
      <div className={styles.headerblock_title}>
        COVID-19 Dashboard by the Center for Systems Science and Engineering (CSSE)
        at Johns Hopkins University (JHU)
      </div>
    </div>
  </div>
);

export default HeaderBlock;
