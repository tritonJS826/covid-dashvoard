import React from 'react';
import styles from './style.module.scss';
import appstyle from '../App/style.module.scss';

//     Deaths cases:
//     array2 TotalDeaths
//     array5 NewDeaths = TotalDeaths for the last available date
//     array8 (TotalDeaths / 100 000 global population) = TotalDeathsfor the 100 thnds population
//     array11 (NewDeaths / 100 000 global population) = NewDeaths for the 100 thnds population

interface Props {
  string: string;
  number: number;
}

const DeathListLine: React.FC<Props> = ({ string, number }) => (
  <div className={styles.deathlistlines}>
    <div className={appstyle.app_listline}>{string}</div>
    <div className={`${appstyle.app_listline} ${styles.line__red}`}>death</div>
    <div className={appstyle.app_listline}>{number}</div>
  </div>
);

export default DeathListLine;
