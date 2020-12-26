import { connect } from 'react-redux';

import ListBlock from './ListBlock';
import { IAppStore } from '../../interfaces/redux/appStore';

const mapStateToProps = ({ appStore: { mergedCovidCountryData } }: { appStore: IAppStore }) => ({
  mergedCovidCountryData,
});

export default connect(mapStateToProps)(ListBlock);
