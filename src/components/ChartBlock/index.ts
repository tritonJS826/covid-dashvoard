import { connect } from 'react-redux';

import ChartBlock from './ChartBlock';
import { IAppStore } from '../../interfaces/redux/appStore';

const mapStateToProps = ({ appStore }: { appStore: IAppStore }) => ({
  data: appStore.chartData,
});

export default connect(mapStateToProps)(ChartBlock);
