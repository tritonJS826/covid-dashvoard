import React from 'react';
import appstyles from '../App/style.module.scss';
import styles from './style.module.scss';
import List from '../List';
import { IMergedElement } from '../../interfaces/redux/appStore';
import { countryData } from '../../interfaces/country';

interface Props {
  mergedCovidCountryData: Array<IMergedElement>,
}

const ListBlock: React.FC<Props> = ({ mergedCovidCountryData }) => {
  // const countries: any[] = [
  //   { country: 'US', number: 10000 },
  //   { country: 'Russia', number: 20000 },
  //   { country: 'Brazil', number: 30000 },
  //   { country: 'Canada', number: 50000 },
  //   { country: 'Australia', number: 40000 },
  // ];

  let countries = [] as countryData[];
  if (mergedCovidCountryData) {
    countries = mergedCovidCountryData.map((country, i: number): countryData => ({
      country: country.Country,
      number: country.TotalConfirmed,
      id: i,
    }));
  }

  return (
    <div className={`${appstyles.app_component_block} ${styles.listblock}`}>
      <div className={appstyles.app_caption}>
        <div className={appstyles.app_caption_title}>Cases by Country/Region/Sovereignty</div>
      </div>
      {console.log(countries)}
      {mergedCovidCountryData && (
      <List
        title="Global"
        subtitle=""
        type="plainListLine"
        data={countries}
      />
      )}
      {/* <div>
        <div className={appstyles.app_caption}>
          <div className={appstyles.app_caption_title}>Cases by Country/Region/Sovereignty</div>
        </div>
      </div>
      <table>
        <tbody>
          {countries.map((country) => (
            <tr key={country.country.toLowerCase()}>
              <td className={appstyles.app_tableline}>
                <div className={`${appstyles.app_listline}
                ${appstyles.app_listline_red}`}>{country.number}</div>
                {country.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className={appstyles.app_buttons_wrapper}>
        <button type="button" className={appstyles.app_button}>cases</button>
        <button type="button" className={appstyles.app_button}>absolute</button>
      </div>
    </div>
  );
};

export default ListBlock;
