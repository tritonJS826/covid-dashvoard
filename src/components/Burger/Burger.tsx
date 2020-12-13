import React from 'react';
import styles from './style.module.scss';

const Burger = () => (
  <div className={styles.Burger}>
    <label className={styles['Burger-menu__btn']} htmlFor="Burger-menu__toggle">
      <input id={styles['Burger-menu__toggle']} type="checkbox" />
      <span />
    </label>
    <ul className={styles['Burger-menu__box']}>
      <li><a className={styles['Burger-menu__item']} href="https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61">Main</a></li>
      <li><a className={styles['Burger-menu__item']} href="https://systems.jhu.edu/research/public-health/ncov-model-2/">Char</a></li>
      <li><a className={styles['Burger-menu__item']} href="https://systems.jhu.edu/research/public-health/ncov-model-2/">Map</a></li>
      <li><a className={styles['Burger-menu__item']} href="https://systems.jhu.edu/research/public-health/ncov-model-2/">Table</a></li>
    </ul>
  </div>
);

export default Burger;
