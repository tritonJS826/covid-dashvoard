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

const RecoveryListLine: React.FC<Props> = ({
  string, number, code, getChartDataByCode,
}) => {
  const onClick = () => {
    getChartDataByCode(code);
  };

  return (
    <div className={styles.recoverylistline} onClick={onClick}>
      <div className={appstyle.app_listline}>{string}</div>
      <div className={`${appstyle.app_listline} ${styles.line__green}`}>recovery</div>
      <div className={appstyle.app_listline}>{number.toLocaleString()}</div>
    </div>
  );
};

export default RecoveryListLine;
