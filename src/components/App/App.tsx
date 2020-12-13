import React from 'react';
import logo from '../../logo.svg';
import styles from './style.module.scss';

import { casesDataType } from '../../interfaces/types';
import { IAppStore } from '../../interfaces/redux/appStore';

interface Props {
  appStore: IAppStore;
  // eslint-disable-next-line no-unused-vars
  setCasesData: (payload: casesDataType) => void;
  getCovidSummary: () => void;
}

const App: React.FC<Props> = ({ appStore, setCasesData, getCovidSummary }) => {
  const { casesData } = appStore;

  const onButtonSetCasesData = () => {
    setCasesData('deseaseCasesData' as casesDataType);
    getCovidSummary();
  };

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          appStore.casesData:
          <br />
          {casesData}
        </p>
        <button type="button" onClick={onButtonSetCasesData}>
          change casesData from deathCasesData to deseaseCasesData!
        </button>
      </header>
    </div>
  );
};

export default App;
