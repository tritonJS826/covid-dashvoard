import React from 'react';
import styles from './style.module.scss';

const List = () => {
  const countries: any[] = [
    { country: 'US', number: 10000 },
    { country: 'Russia', number: 20000 },
    { country: 'Brazil', number: 30000 },
    { country: 'Canada', number: 50000 },
    { country: 'Australia', number: 40000 },
  ];

  return (
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
  );
};

export default List;
