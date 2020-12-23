import React from 'react';
import Map from '../Map';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

//     The same data as in the table.
//     By country:
//     array1 TotalConfirmed (by default)
//     array2 TotalDeaths
//     array3 TotalRecovered
//     array4 NewConfirmed = TotalConfirmed cases for the last available date
//     array5 NewDeaths = TotalDeaths for the last available date
//     array6 NewRecovered = TotalRecovered for the last available date
//     array7 (TotalConfirmed / 100 000 global population) = TotalConfirmed for the 100thnds popul
//     array8 (TotalDeaths / 100 000 global population) = TotalDeathsfor the 100 thnds population
//     array9 (TotalRecovered  / 100 000 global population) = TotalRecovered  for the 100thnds popul
//     array10 (NewConfirmed / 100 000 global population) = NewConfirmed for the 100thnds popul
//     array11 (NewDeaths / 100 000 global population) = NewDeaths for the 100 thnds population
//     array12 (NewRecovered / 100 000 global population) = NewRecovered for the 100thnds popultn

const MapBlock = () => (
  <div className={`${appstyles.app_component_block} ${styles.mapblock}`}>
    <Map />
  </div>
);
// class MapBlock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addActiveClass = this.addActiveClass.bind(this);
//     this.state
//   }
// }
// onClick={handleBlockClick}
// function handleBlockClick(e) {
//     <div className={isActive ? 'your_className': null}
//       onClick={toggleClass}
//     ></div>
// }

export default MapBlock;
