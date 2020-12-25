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
  let countries = [] as countryData[];
  if (mergedCovidCountryData) {
    countries = mergedCovidCountryData.map((country, i: number): countryData => ({
      country: country.Country,
      number: country.TotalConfirmed,
      id: i,
      code: country.CountryCode,
    }));
  }

  return (
    <div className={`${appstyles.app_component_block} ${styles.listblock}`}>
      <div className={appstyles.app_caption}>
        <div className={appstyles.app_caption_title}>Cases by Country/Region/Sovereignty</div>
      </div>
      {mergedCovidCountryData && (
      <List
        title="Global"
        subtitle=""
        type="plainListLine"
        data={countries}
      />
      )}

      <div className={appstyles.app_buttons_wrapper}>
        <button type="button" className={appstyles.app_button}>cases</button>
        <button type="button" className={appstyles.app_button}>absolute</button>
      </div>
    </div>
  );
};

export default ListBlock;
