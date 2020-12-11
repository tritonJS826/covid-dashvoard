import React from 'react';
import logo from '../../logo.svg';
import styles from './style.module.scss';
import Burger from '../Burger';

const HeaderBlock = () => (
  <div className={styles.HeaderBlock}>
    <div className={styles['HeaderBlock-wrapper']}>
      <a className={styles['HeaderBlock-logo-btn']} href="https://systems.jhu.edu/research/public-health/ncov/"><img src={logo} className={styles['HeaderBlock-logo']} alt="logo" /></a>
      <div className={styles['HeaderBlock-title']}>COVID-19 Dashboard by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University (JHU)</div>
      <Burger />
    </div>
  </div>
);

export default HeaderBlock;
