import React from 'react';
import styles from './style.module.scss';

const superfunction = (type: number) => {
  if (type === 1) {
    return (
      <div>
        hhgj
        type1
      </div>
    );
  }
  if (type === 2) {
    return (
      <div>
        hhgj
        type2
      </div>
    );
  }
  return <div>empty div</div>;
};

const Map = () => (
  <div className={styles.Map}>
    Map is here
    {superfunction(2)}
  </div>
);

export default Map;
