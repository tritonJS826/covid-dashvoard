import React from 'react';
import HeaderBlock from '../HeaderBlock';
import GlobalCasesBlock from '../GlobalCasesBlock';
import ListBlock from '../ListBlock';
import MapBlock from '../MapBlock';
import TableBlock from '../TableBlock';
import ChartBlock from '../ChartBlock';
import styles from './style.module.scss';

import { casesDataType } from '../../interfaces/types';
import { IAppStore } from '../../interfaces/redux/appStore';

interface Props {
  appStore: IAppStore;
  // eslint-disable-next-line no-unused-vars
  setCasesData: (payload: casesDataType) => void;
  getCovidSummary: () => void;
}

const App: React.FC<Props> = () => (
  // const { casesData } = appStore;
  // const onButtonSetCasesData = () => {
  //   setCasesData('deseaseCasesData' as casesDataType);
  //   getCovidSummary();
  // };
  <div className={styles.App}>
    <header className={styles['App-header']}>
      <HeaderBlock />
    </header>
    <div className={styles['App-main']}>
      <div className={styles['App-left']}>
        <GlobalCasesBlock />
        <ListBlock />
      </div>
      <div className={styles['App-center']}>
        <MapBlock />
      </div>
      <div className={styles['App-right']}>
        <TableBlock />
        <ChartBlock />
      </div>
    </div>
  </div>
);

export default App;
