import React, { useState } from 'react';
import Map from '../Map';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

export const MapBlock: React.FC = () => {
  const [isActive, setActive] = useState(false);

  const addActiveClass = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={
        isActive
          ? `${appstyles.app_component_block} ${styles.mapblock} ${appstyles.app_popup}`
          : `${appstyles.app_component_block} ${styles.mapblock}`
      }
      onDoubleClick={addActiveClass}
    >
      <button
        type="button"
        className={
          isActive
            ? `${appstyles.app_popup_button} ${appstyles.app_popup_button_active}`
            : `${appstyles.app_popup_button}`
        }
        onDoubleClick={addActiveClass}
      >
        X
      </button>
      <Map />
    </div>
  );
};

export default MapBlock;
