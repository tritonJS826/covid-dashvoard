import { connect } from 'react-redux';

import App from './App';
import { IAppStore } from '../../interfaces/redux/appStore';
import { setCasesData } from '../../redux/creators/appStore';
import { getCovidSummary, getCountryInfo } from '../../redux/creators/appStoreEffects';

const mapStateToProps = ({ appStore }: { appStore: IAppStore }) => ({
  appStore,
});

const actions = {
  setCasesData,
  getCovidSummary,
  getCountryInfo,
};

export default connect(mapStateToProps, actions)(App);
