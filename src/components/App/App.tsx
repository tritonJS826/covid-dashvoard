import React from 'react';
import styles from './style.module.scss';
import HeaderBlock from '../HeaderBlock';
import GlobalCasesBlock from '../GlobalCasesBlock';
import ListBlock from '../ListBlock';
import MapBlock from '../MapBlock';
import TableBlock from '../TableBlock';
import ChartBlock from '../ChartBlock';

interface Props {
}

const App: React.FC<Props> = () => (
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
