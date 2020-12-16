import React from 'react';
// import List from '../List/List';
import styles from './style.module.scss';

//     Deaths cases:
//     array2 TotalDeaths
//     array5 NewDeaths = TotalDeaths for the last available date
//     array8 (TotalDeaths / 100 000 global population) = TotalDeathsfor the 100 thnds population
//     array11 (NewDeaths / 100 000 global population) = NewDeaths for the 100 thnds population

const DeathListLine = () => {
  const countries: any[] = [
    { country: 'US', number: 10000 },
    { country: 'Russia', number: 20000 },
    { country: 'Brazil', number: 30000 },
    { country: 'Canada', number: 50000 },
    { country: 'Australia', number: 40000 },
  ];

  return (
    <div className={styles.death_list_line}>
      <div>
        <div className={styles['death_list_line-caption']}>
          <div className={styles['death_list_line-title']}>Global Deaths</div>
          <div className={styles['death_list_line-quantity']}>1234567</div>
        </div>
      </div>
      <div className={styles.List}>
        <table>
          <tbody>
            {countries.map((country) => (
              <tr key={country.country.toLowerCase()}>
                <td>
                  {country.country}
                  {country.number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeathListLine;
