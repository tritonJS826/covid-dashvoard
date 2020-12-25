import { connect } from 'react-redux';

import DeseaseListLine from './DeseaseListLine';
import { getChartDataByCode } from '../../redux/creators/appStoreEffects';

const mapStateToProps = () => ({});

const actions = {
  getChartDataByCode,
};

export default connect(mapStateToProps, actions)(DeseaseListLine);
