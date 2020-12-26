import { connect } from 'react-redux';

import CountryListLine from './CountryListLine';
import { getChartDataByCode } from '../../redux/creators/appStoreEffects';

const mapStateToProps = () => ({});

const actions = {
  getChartDataByCode,
};

export default connect(mapStateToProps, actions)(CountryListLine);
