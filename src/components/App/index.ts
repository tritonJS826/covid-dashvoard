import { connect } from 'react-redux';

import App from './App';
import { IAppStore } from '../../interfaces/redux/appStore';
import { mergeCountryInfoCovidSummary } from '../../redux/creators/appStoreEffects';

const mapStateToProps = ({ appStore }: { appStore: IAppStore }) => ({
  appStore,
});

const actions = {
  mergeCountryInfoCovidSummary,
};

export default connect(mapStateToProps, actions)(App);
