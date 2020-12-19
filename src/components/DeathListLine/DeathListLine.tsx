import React, { MouseEvent } from 'react';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

//     Deaths cases:
//     array2 TotalDeaths
//     array5 NewDeaths = TotalDeaths for the last available date
//     array8 (TotalDeaths / 100 000 global population) = TotalDeathsfor the 100 thnds population
//     array11 (NewDeaths / 100 000 global population) = NewDeaths for the 100 thnds population

const getDeathListLine = (type: string) => {
  const countries: any[] = [
    { country: 'US', number: 10000 },
    { country: 'Russia', number: 20000 },
    { country: 'Brazil', number: 30000 },
    { country: 'Canada', number: 50000 },
    { country: 'Australia', number: 40000 },
  ];

  const switchSubTables = (e: MouseEvent) => {
    e.target.getAttribute('data-caption');
  };

  const subTable = (title: string, color: string, quantity: number) => (
    <div className={appstyles.app_component_block}>
      <div>
        <div className={appstyles.app_caption}>
          <div className={appstyles.app_caption_title}>{title}</div>
          <div className={`${appstyles.app_caption_quantity} ${appstyles.app_caption_quantity}__${color}`}>{quantity}</div>
        </div>
      </div>
      <table className={styles.deathlistline}>
        <tbody>
          {countries.map((country) => (
            <tr key={country.country.toLowerCase()}>
              <td className={appstyles.app_tableline}>
                {country.country}
                <div className={`${appstyles.app_listline} ${appstyles.app_listline}__${color}`}>deaths</div>
                {country.number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={appstyles.app_buttons_wrapper}>
        <button type="button" className={appstyles.app_button} data-caption="death" onClick={switchSubTables}>
          deaths
        </button>
        <button type="button" className={appstyles.app_button} data-caption="recoveries" onClick={switchSubTables}>
          recoveries
        </button>
        <button type="button" className={appstyles.app_button} data-caption="tests" onClick={switchSubTables} onCl>
          test
        </button>
        <button type="button" className={appstyles.app_button} data-caption="results" onClick={switchSubTables} onCl>
          results
        </button>
      </div>
    </div>
  );

  if (type === 'death') {
    subTable('Global Deaths', 'white', 12344);
  }
  if (type === 'tests') {
    subTable('Global Tests Results', 'blue', 56403);
  }
  return subTable('Global Recoveries', 'green', 88434);
};

const DeathListLine = () => (
  getDeathListLine('recovered')
);

export default DeathListLine;
