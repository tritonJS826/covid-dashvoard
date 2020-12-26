import { connect } from 'react-redux';

import RecoveryListLine from './RecoveryListLine';
import { getChartDataByCode } from '../../redux/creators/appStoreEffects';

const mapStateToProps = () => ({});

const actions = {
  getChartDataByCode,
};

export default connect(mapStateToProps, actions)(RecoveryListLine);
