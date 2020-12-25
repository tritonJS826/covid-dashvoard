import React, { useEffect } from 'react';
import HeaderBlock from '../HeaderBlock';
import GlobalCasesBlock from '../GlobalCasesBlock';
import ListBlock from '../ListBlock';
import MapBlock from '../MapBlock';
import TableBlock from '../TableBlock';
import ChartBlock from '../ChartBlock';
import FooterBlock from '../FooterBlock';
import appstyles from './style.module.scss';

interface Props {
  mergeCountryInfoCovidSummary: () => void;
}

const App: React.FC<Props> = ({
  mergeCountryInfoCovidSummary,
}) => {
  useEffect(() => {
    mergeCountryInfoCovidSummary();
  }, []);

  return (
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
          <ChartBlock casesData="deathCasesData" />
        </div>
      </div>
      <footer className={appstyles.app_footer}>
        <FooterBlock />
      </footer>
    </div>
  );
};

export default App;
