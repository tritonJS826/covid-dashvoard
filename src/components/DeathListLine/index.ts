import { connect } from 'react-redux';

import DeatListLine from './DeathListLine';
import { getChartDataByCode } from '../../redux/creators/appStoreEffects';

const mapStateToProps = () => ({});

const actions = {
  getChartDataByCode,
};

export default connect(mapStateToProps, actions)(DeatListLine);
