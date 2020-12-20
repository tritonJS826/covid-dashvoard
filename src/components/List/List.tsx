import React from 'react';
import { lineType } from '../../interfaces/types';
import { countryData } from '../../interfaces/country';

import DeathListLine from '../DeathListLine';
import DeseaseListLine from '../DeseaseListLine';
import RecoveryListLine from '../RecoveryListLine';
import CountryListLine from '../CountryListLine';

import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

interface Props {
  title: string;
  subtitle: string;
  type: lineType;
  data: Array<countryData>;
}

const getLineByType = (type: lineType, string: string, number: number) => {
  if (type === 'recoveryCasesData') return <RecoveryListLine string={string} number={number} />;
  if (type === 'deseaseCasesData') return <DeseaseListLine string={string} number={number} />;
  if (type === 'deathCasesData') return <DeathListLine string={string} number={number} />;
  return <CountryListLine string={string} number={number} />;
};

const List: React.FC<Props> = ({
  title,
  subtitle,
  type,
  data,
}) => (
  <div className={styles.list}>
    <div>
      <div className={appstyles.app_caption}>
        <div className={appstyles.app_caption_title}>{title}</div>
        <div className={`${appstyles.app_caption_quantity} ${appstyles.app_caption_quantity}__white`}>
          {subtitle}
        </div>
      </div>
    </div>
    <table className={styles.deathlistline}>
      <tbody>
        {data.map((country: countryData) => (
          <tr key={country.id}>
            <td className={appstyles.app_tableline}>
              {getLineByType(type, country.country, country.number)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default List;
