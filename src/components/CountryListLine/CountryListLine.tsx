import React from 'react';
import styles from './style.module.scss';
import appstyle from '../App/style.module.scss';

interface Props {
  string: string;
  number: number;
}

const CountryListLine: React.FC<Props> = ({ string, number }) => (
  <div className={styles.CountryListLine}>
    <div className={appstyle.app_listline}>{string}</div>
    <div className={`${appstyle.app_listline} ${styles.line__green}`}> </div>
    <div className={appstyle.app_listline}>{number}</div>
  </div>
);

export default CountryListLine;
