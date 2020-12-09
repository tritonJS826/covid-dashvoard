import React from 'react';
import logo from '../../logo.svg';
import styles from './style.module.scss';

interface Props {
  counter: number;
  // eslint-disable-next-line no-unused-vars
  increaseCounter: (payload: string) => { type: string; payload: string };
    // eslint-disable-next-line no-unused-vars
  decreaseCounter: (payload: string) => { type: string; payload: string };
}

const App: React.FC<Props> = ({ counter, increaseCounter, decreaseCounter }) => {
  const onButtonIncrease = () => {
    increaseCounter('in');
  };

  const onButtonDecrease = () => {
    decreaseCounter('de');
  };

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          {counter}
        </p>
        <button type="button" onClick={onButtonIncrease}>
          increase!
        </button>
        <button type="button" onClick={onButtonDecrease}>
          decrease!
        </button>

      </header>
    </div>
  );
};

export default App;
