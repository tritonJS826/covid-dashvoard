import { connect } from 'react-redux';

import Map from './Map';
import { IAppStore } from '../../interfaces/redux/appStore';

const mapStateToProps = ({ appStore }: { appStore: IAppStore }) => ({
  appStore,
});

export default connect(mapStateToProps)(Map);
