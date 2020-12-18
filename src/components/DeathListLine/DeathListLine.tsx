import React from 'react';
// import List from '../List/List';
// import styles from './style.module.scss';
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

  if (type === 'death') {
    return (
      <div className={appstyles.app_component_block}>
        <div>
          <div className={appstyles.app_caption}>
            <div className={appstyles.app_caption_title}>Global Deaths</div>
            <div className={`${appstyles.app_caption_quantity} ${appstyles.app_caption_quantity__green}`}>1234567</div>
          </div>
        </div>
        <table>
          <tbody>
            {countries.map((country) => (
              <tr key={country.country.toLowerCase()}>
                <td className={appstyles.app_tableline}>
                  {country.country}
                  <div className={`${appstyles.app_listline} ${appstyles.app_listline_white}`}>deaths</div>
                  {country.number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={appstyles.app_buttons_wrapper}>
          <button type="button" className={appstyles.app_button}>cases</button>
          <button type="button" className={appstyles.app_button}>indicators</button>
        </div>
      </div>
    );
  }
  if (type === 'tests') {
    return (
      <div className={appstyles.app_component_block}>
        <div>
          <div className={appstyles.app_caption}>
            <div className={appstyles.app_caption_title}>Global Tests Results</div>
            <div className={`${appstyles.app_caption_quantity} ${appstyles.app_caption_quantity__blue}`}>1234567</div>
          </div>
        </div>
        <table>
          <tbody>
            {countries.map((country) => (
              <tr key={country.country.toLowerCase()}>
                <td className={appstyles.app_tableline}>
                  {country.country}
                  <div className={`${appstyles.app_listline} ${appstyles.app_listline_blue}`}>tests</div>
                  {country.number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={appstyles.app_buttons_wrapper}>
          <button type="button" className={appstyles.app_button}>cases</button>
          <button type="button" className={appstyles.app_button}>indicators</button>
        </div>
      </div>
    );
  }
  return (
    <div className={appstyles.app_component_block}>
      <div>
        <div className={appstyles.app_caption}>
          <div className={appstyles.app_caption_title}>Global Recoveries</div>
          <div className={`${appstyles.app_caption_quantity} ${appstyles.app_caption_quantity__green}`}>1234567</div>
        </div>
      </div>
      <table>
        <tbody>
          {countries.map((country) => (
            <tr key={country.country.toLowerCase()}>
              <td className={appstyles.app_tableline}>
                {country.country}
                <div className={`${appstyles.app_listline} ${appstyles.app_listline_green}`}>tests</div>
                {country.number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={appstyles.app_buttons_wrapper}>
        <button type="button" className={appstyles.app_button}>cases</button>
        <button type="button" className={appstyles.app_button}>indicators</button>
      </div>
    </div>
  );
};

const DeathListLine = () => (
  getDeathListLine('recovered')
);

export default DeathListLine;
