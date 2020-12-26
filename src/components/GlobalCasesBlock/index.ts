import { connect } from 'react-redux';
import { IAppStore } from '../../interfaces/redux/appStore';

import GlobalCasesBlock from './GlobalCasesBlock';

const mapStateToProps = ({ appStore: { mergedCovidCountryData } }: { appStore: IAppStore }) => ({
  mergedCovidCountryData,
});

export default connect(mapStateToProps)(GlobalCasesBlock);
