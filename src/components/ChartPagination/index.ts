import { connect } from 'react-redux';

import ChartPagination from './ChartPagination';
// import { ICounterStore } from '../../interfaces/redux/counterStore';
// import { increaseCounter, decreaseCounter } from '../../redux/creators/counterStore';
import { IAppStore } from '../../interfaces/redux/appStore';

const mapStateToProps = ({ appStore }: { appStore: IAppStore }) => ({
  casesData: appStore.casesData,
  casesNumber: appStore.casesNumber,
});

// const actions = {
//   increaseCounter,
//   decreaseCounter,
// };

export default connect(mapStateToProps)(ChartPagination);
