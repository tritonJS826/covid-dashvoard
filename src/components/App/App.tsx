import React from 'react';
import HeaderBlock from '../HeaderBlock';
import GlobalCasesBlock from '../GlobalCasesBlock';
import ListBlock from '../ListBlock';
import MapBlock from '../MapBlock';
import TableBlock from '../TableBlock';
import ChartBlock from '../ChartBlock';
import appstyles from './style.module.scss';

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
  <div className={appstyles.app}>
    <header className={appstyles.app_header}>
      <HeaderBlock />
    </header>
    <div className={appstyles.app_main}>
      <div className={appstyles.app_left}>
        <GlobalCasesBlock />
        <ListBlock />
      </div>
      <div className={appstyles.app_center}>
        <MapBlock />
      </div>
      <div className={appstyles.app_right}>
        <TableBlock />
        <ChartBlock />
      </div>
    </div>
  </div>
);

export default App;
