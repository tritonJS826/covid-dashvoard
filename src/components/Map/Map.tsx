import React from 'react';
import {
  MapContainer,
  TileLayer,
  Popup,
  LayersControl,
  LayerGroup,
  CircleMarker,
} from 'react-leaflet';

import { IAppStore } from '../../interfaces/redux/appStore';

import 'leaflet/dist/leaflet.css';
import styles from './style.module.scss';

interface Props {
  appStore: IAppStore;
}

const Map: React.FC<Props> = ({ appStore }) => {
  console.log(appStore);
  const renderCircle = () => appStore.mergedCovidCountryData
    .map((element) => element.latlng.length > 1 && (
    <CircleMarker
      center={element.latlng}
      pathOptions={{ color: 'red', stroke: false }}
      radius={12}
      key={element.name}
    >
      <Popup>
        <div>
          <div>{element.name}</div>
          <div>
            <div>
              infected:
              {element.TotalConfirmed}
            </div>

            <div>
              deaths:
              {element.TotalDeaths}
            </div>
            <div>
              recovered:
              {element.TotalRecovered}
            </div>
          </div>
        </div>
      </Popup>
    </CircleMarker>
    ));

  return (
    <div className={styles.container} id="mapid">
      <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false} style={{ height: '100%' }}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="Basic theme">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Black and White theme">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Dark theme">
            <TileLayer
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="infected">
            <LayerGroup>
              {appStore && renderCircle()}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Map;
