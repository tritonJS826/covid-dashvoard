import React from 'react';
import appstyles from '../App/style.module.scss';
import styles from './style.module.scss';

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

const getCountriesListLine = () => {
  const countries: any[] = [
    { country: 'US1', number: 10000 },
    { country: 'Russia1', number: 20000 },
    { country: 'Brazil1', number: 30000 },
    { country: 'Canada1', number: 50000 },
    { country: 'Australia1', number: 40000 },
    { country: 'US2', number: 10000 },
    { country: 'Russia2', number: 20000 },
    { country: 'Brazil22', number: 30000 },
    { country: 'Canada', number: 50000 },
    { country: 'Australia2', number: 40000 },
    { country: 'US33', number: 10000 },
    { country: 'Russia3', number: 20000 },
    { country: 'Brazil3', number: 30000 },
    { country: 'Canada3', number: 50000 },
    { country: 'Australia3', number: 40000 },
    { country: 'Brazil4', number: 30000 },
    { country: 'Canada4', number: 50000 },
    { country: 'Australia4', number: 40000 },
    { country: 'US4', number: 10000 },
    { country: 'Russia5', number: 20000 },
    { country: 'Brazil5', number: 30000 },
    { country: 'Canada5', number: 50000 },
    { country: 'Australia5', number: 40000 },
  ];
  return (
    <div className={`${appstyles.app_component_block} ${styles.listblock}`}>
      <div>
        <div className={appstyles.app_caption}>
          <div className={appstyles.app_caption_title}>Cases by Country/Region/Sovereignty</div>
        </div>
      </div>
      <div className={appstyles.app_table}>
        <table>
          <tbody>
            {countries.map((country) => (
              <tr key={country.country.toLowerCase()}>
                <td className={appstyles.app_tableline}>
                  <div className={`${appstyles.app_listline} ${appstyles.app_listline_red}`}>{country.number}</div>
                  {country.country}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={appstyles.app_buttons_wrapper}>
        <button type="button" className={appstyles.app_button}>cases</button>
        <button type="button" className={appstyles.app_button}>indicators</button>
      </div>
    </div>
  );
};

const ListBlock = () => (
  getCountriesListLine()
);

export default ListBlock;
