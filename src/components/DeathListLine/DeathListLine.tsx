import React from 'react';
import styles from './style.module.scss';
import appstyle from '../App/style.module.scss';

interface Props {
  string: string;
  number: number;
  code: string;
  // eslint-disable-next-line
  getChartDataByCode: (code: string) => void;
}

const DeathListLine: React.FC<Props> = ({
  string, number, code, getChartDataByCode,
}) => {
  const onClick = () => {
    getChartDataByCode(code);
  };

  return (
    <div className={styles.deathlistlines} onClick={onClick}>
      <div className={appstyle.app_listline}>{string}</div>
      <div className={`${appstyle.app_listline} ${styles.line__red}`}>death</div>
      <div className={appstyle.app_listline}>{number.toLocaleString()}</div>
    </div>
  );
};

export default DeathListLine;
