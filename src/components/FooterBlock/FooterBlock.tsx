import React from 'react';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';
// import rsschool from '../../';

const FooterBlock = () => (
  <div className={`${appstyles.app_component_block} ${styles.footerblock}`}>
    <div className={styles.footerblock_title}>
      <div className={styles.footerblock_link}>
        <a href="https://github.com/tritonjs826">tritonjs826</a>
      </div>
      <div className={styles.footerblock_link}>
        <a href="https://github.com/DzmitrySiniakou">DzmitrySiniakou</a>
      </div>
      <div className={styles.footerblock_link}>
        <a href="https://github.com/grntea">GrnTea</a>
      </div>
      <span>2020 © COVID-Dashboard</span>
      {/* <a href="https://rs.school/js/"><img className={styles.footer_img} src={rsschool}/></a> */}
    </div>
  </div>
);

export default FooterBlock;
