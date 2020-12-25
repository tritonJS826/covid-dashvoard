import { connect } from 'react-redux';

import App from './App';
import { IAppStore } from '../../interfaces/redux/appStore';
import { mergeCountryInfoCovidSummary, getChartDataByCode } from '../../redux/creators/appStoreEffects';

const mapStateToProps = ({ appStore: { currentRegion } }: { appStore: IAppStore }) => ({
  currentRegion,
});

const actions = {
  mergeCountryInfoCovidSummary,
  getChartDataByCode,
};

export default connect(mapStateToProps, actions)(App);
