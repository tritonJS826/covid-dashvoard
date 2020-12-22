import { connect } from 'react-redux';

import ListBlock from './ListBlock';
import { IAppStore } from '../../interfaces/redux/appStore';
// import { increaseCounter, decreaseCounter } from '../../redux/creators/counterStore';

const mapStateToProps = ({ appStore: { summaryData } }: { appStore: IAppStore }) => ({
  summaryData,
});

// const actions = {
//   increaseCounter,
//   decreaseCounter,
// };

export default connect(mapStateToProps)(ListBlock);
