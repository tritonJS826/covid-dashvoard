import { connect } from 'react-redux';

import TableBlock from './TableBlock';
import { IAppStore } from '../../interfaces/redux/appStore';
import { setCasesData, toggleCasesNumber } from '../../redux/creators/appStore';

const mapStateToProps = ({
  appStore: {
    casesData, casesNumber, summaryData, currentRegion,
  },
}: {
    appStore: IAppStore;
}) => ({
  casesData,
  casesNumber,
  summaryData,
  currentRegion,
});

const actions = {
  setCasesData,
  toggleCasesNumber,
};

export default connect(mapStateToProps, actions)(TableBlock);
