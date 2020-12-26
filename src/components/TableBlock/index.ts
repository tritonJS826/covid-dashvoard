import { connect } from 'react-redux';

import TableBlock from './TableBlock';
import { IAppStore } from '../../interfaces/redux/appStore';
import { setCasesData, toggleCasesNumber } from '../../redux/creators/appStore';

const mapStateToProps = ({
  appStore: {
    casesData, casesNumber, currentRegion, mergedCovidCountryData,
  },
}: {
    appStore: IAppStore;
}) => ({
  casesData,
  casesNumber,
  currentRegion,
  data: mergedCovidCountryData,
});

const actions = {
  setCasesData,
  toggleCasesNumber,
};

export default connect(mapStateToProps, actions)(TableBlock);
