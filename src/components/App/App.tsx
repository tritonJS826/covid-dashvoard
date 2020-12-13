// import React from 'react';
// import styles from './style.module.scss';
// import HeaderBlock from '../HeaderBlock';
// import GlobalCasesBlock from '../GlobalCasesBlock';
// import ListBlock from '../ListBlock';
// import MapBlock from '../MapBlock';
// import TableBlock from '../TableBlock';
// import ChartBlock from '../ChartBlock';

// <<<<<<< HEAD
// interface Props {
// }

// <<<<<<< Updated upstream
// const App: React.FC<Props> = () => (
//   <div className={styles.App}>
//     <header className={styles['App-header']}>
//       <HeaderBlock />
//     </header>
//     <div className={styles['App-main']}>
//       <div className={styles['App-left']}>
//         <GlobalCasesBlock />
//         <ListBlock />
//       </div>
//       <div className={styles['App-center']}>
//         <MapBlock />
//       </div>
//       <div className={styles['App-right']}>
//         <TableBlock />
//         <ChartBlock />
//       </div>
// =======
// const App: React.FC<Props> = ({ counter, increaseCounter, decreaseCounter }) => {
//   const onButtonIncrease = () => {
//     increaseCounter('in');
//   };

//   const onButtonDecrease = () => {
//     decreaseCounter('de');
// =======
// import { casesDataType } from '../../interfaces/types';
// import { IAppStore } from '../../interfaces/redux/appStore';

// interface Props {
//   appStore: IAppStore;
//   // eslint-disable-next-line no-unused-vars
//   setCasesData: (payload: casesDataType) => void;
//   getCovidSummary: () => void;
// }

// const App: React.FC<Props> = ({ appStore, setCasesData, getCovidSummary }) => {
//   const { casesData } = appStore;

//   const onButtonSetCasesData = () => {
//     setCasesData('deseaseCasesData' as casesDataType);
//     getCovidSummary();
// >>>>>>> 80f424ab23c788c1baaf20216f8669a725edbe98
//   };

//   return (
//     <div className={styles.App}>
//       <header className={styles['App-header']}>
//         <img src={logo} className={styles['App-logo']} alt="logo" />
//         <p>
// <<<<<<< HEAD
//           {counter}
//         </p>
//         <button type="button" onClick={onButtonIncrease}>
//           increase!
//         </button>
//         <button type="button" onClick={onButtonDecrease}>
//           decrease!
//         </button>

// =======
//           appStore.casesData:
//           <br />
//           {casesData}
//         </p>
//         <button type="button" onClick={onButtonSetCasesData}>
//           change casesData from deathCasesData to deseaseCasesData!
//         </button>
// >>>>>>> 80f424ab23c788c1baaf20216f8669a725edbe98
//       </header>
// >>>>>>> Stashed changes
//     </div>
//   </div>
// );

// export default App;

import React from 'react';
// import logo from '../../logo.svg';
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
