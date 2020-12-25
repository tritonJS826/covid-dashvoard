import React from 'react';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';
import { IMergedElement } from '../../interfaces/redux/appStore';

interface Props {
  mergedCovidCountryData: Array<IMergedElement>
}

const GlobalCasesBlock: React.FC<Props> = ({ mergedCovidCountryData }) => (
  <div className={`${appstyles.app_component_block} ${styles.globalcases}`}>
    <div className={appstyles.app_caption_title}>Global Cases</div>
    {mergedCovidCountryData.length > 1 && (
      <div className={`${appstyles.app_caption_quantity} ${appstyles.app_caption_quantity__red}`}>
        {mergedCovidCountryData[mergedCovidCountryData.length - 1].TotalConfirmed}
      </div>
    )}
  </div>
);

export default GlobalCasesBlock;
