import React from 'react';
import styles from './style.module.scss';
import appstyle from '../App/style.module.scss';

interface Props {
  string: string;
  number: number;
}

const DeseaseListLine: React.FC<Props> = ({ string, number }) => (
  <div className={styles.DeseaseListLine}>
    {/* <div className={styles['DeseaseListLine-title']}>Global Deseases</div> */}
    <div className={appstyle.app_listline}>{string}</div>
    <div className={`${appstyle.app_listline} ${styles.line__yellow}`}>desease</div>
    <div className={appstyle.app_listline}>{number}</div>
  </div>
);

export default DeseaseListLine;
