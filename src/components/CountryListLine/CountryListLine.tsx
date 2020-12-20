import React from 'react';
import styles from './style.module.scss';
// import appstyles from '../App/style.module.scss';

interface Props {
  string: string;
  number: number;
}

const CountryListLine: React.FC<Props> = ({ string, number }) => (
  <div className={styles.CountryListLine}>
    {string}
    <div className={styles.line__white}>deaths</div>
    {number}
  </div>
);

export default CountryListLine;
