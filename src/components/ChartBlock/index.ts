import { connect } from 'react-redux';

import ChartBlock from './ChartBlock';
// import { ICounterStore } from '../../interfaces/redux/counterStore';
// import { increaseCounter, decreaseCounter } from '../../redux/creators/counterStore';
import { IAppStore } from '../../interfaces/redux/appStore';

const mapStateToProps = ({ appStore }: { appStore: IAppStore }) => ({
  appStore,
});

// const actions = {
//   increaseCounter,
//   decreaseCounter,
// };

export default connect(mapStateToProps)(ChartBlock);
