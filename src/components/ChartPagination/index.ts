import { connect } from 'react-redux';

import ChartPagination from './ChartPagination';
import { setCasesData } from '../../redux/creators/appStore';

const mapStateToProps = () => ({});

const actions = {
  setCasesData,
};

export default connect(mapStateToProps, actions)(ChartPagination);
