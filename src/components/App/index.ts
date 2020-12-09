import { connect } from 'react-redux';

import App from './App';
import { ICounterStore } from '../../interfaces/redux/counterStore';
import { increaseCounter, decreaseCounter } from '../../redux/creators/counterStore';

const mapStateToProps = ({ counterStore: { counter } }: { counterStore: ICounterStore }) => ({
  counter,
});

const actions = {
  increaseCounter,
  decreaseCounter,
};

export default connect(mapStateToProps, actions)(App);
