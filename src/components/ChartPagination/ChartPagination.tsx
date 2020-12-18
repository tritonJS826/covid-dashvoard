import React from 'react';
import appstyles from '../App/style.module.scss';

const ChartPagination = () => (
  <div className={appstyles.app_buttons_wrapper}>
    <button type="button" className={appstyles.app_button}>cases</button>
    <button type="button" className={appstyles.app_button}>indicators</button>
  </div>
);

export default ChartPagination;
