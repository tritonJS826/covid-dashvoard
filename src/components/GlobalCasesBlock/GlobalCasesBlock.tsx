import React from 'react';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';
import { IMergedElement } from '../../interfaces/redux/appStore';

interface Props {
  mergedCovidCountryData: Array<IMergedElement>
}

const GlobalCasesBlock: React.FC<Props> = ({ mergedCovidCountryData }) => {
  const getGlobalData = () => {
    const global = mergedCovidCountryData[mergedCovidCountryData.length - 1];
    if (global.TotalConfirmed) {
      return Math.round(
        (global.TotalConfirmed * 4000.021),
      );
    }

    return '';
  };

  return (
    <div className={`${appstyles.app_component_block} ${styles.globalcases}`}>
      <div className={appstyles.app_caption_title}>Global Cases</div>
      { mergedCovidCountryData[0] && (
        <div className={`${appstyles.app_caption_quantity} ${appstyles.app_caption_quantity__red}`}>
          {getGlobalData()}
        </div>
      )}
    </div>
  );
};

export default GlobalCasesBlock;
