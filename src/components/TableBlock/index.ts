import { connect } from 'react-redux';

import TableBlock from './TableBlock';
import { IAppStore } from '../../interfaces/redux/appStore';
import { setCasesData } from '../../redux/creators/appStore';

const mapStateToProps = ({ appStore: { casesData } }: { appStore: IAppStore }) => ({
  casesData,
});

const actions = {
  setCasesData,
};

export default connect(mapStateToProps, actions)(TableBlock);
