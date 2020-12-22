import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Popup,
  LayersControl,
  LayerGroup,
  CircleMarker,
} from 'react-leaflet';

// import { IAppStore } from '../../interfaces/redux/appStore';

import 'leaflet/dist/leaflet.css';
import styles from './style.module.scss';

// interface Props {
//   appStore: IAppStore;
// }

const Map: React.FC = () => {
  const [cordinates] = useState([
    {
      country: 'Spain',
      Lat: 21.49,
      Lon: -10.08,
    },
    {
      country: 'Argentina',
      Lat: 31.49,
      Lon: -5.08,
    },
    {
      country: 'Poland',
      Lat: 41.49,
      Lon: -15.08,
    },
  ]);

  // const renderCircle = () => appStore.countryCoordinates.map((e) => (
  //   <Circle
  //     center={[e.Lat, e.Lon]}
  //     pathOptions={{ fillColor: 'red' }}
  //     radius={1000}
  //     stroke={false}
  //   />
  // ));
  // console.log(appStore);

  return (
    <div className={styles.container} id="mapid">
      <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false} style={{ height: '100%' }}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Dark">
            <TileLayer
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Test N1">
            <LayerGroup>
              {cordinates.map((e) => (
                <CircleMarker
                  center={[e.Lat, e.Lon]}
                  pathOptions={{ color: 'red', stroke: false }}
                  radius={20}
                >
                  <Popup>Test !</Popup>
                </CircleMarker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Test N2">
            <LayerGroup>
              {cordinates.map((e) => (
                <CircleMarker
                  center={[e.Lat, e.Lon]}
                  pathOptions={{ fillColor: 'green' }}
                  radius={20}

                >
                  <Popup>Test !</Popup>
                </CircleMarker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Map;
