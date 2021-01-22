
import 'ol/ol.css';
import FullScreen from 'ol/control/FullScreen';
import apply from 'ol-mapbox-style';

apply(
  'map',
  'https://avoin-karttakuva.maanmittauslaitos.fi/vectortiles/stylejson/v20/hobby.json?TileMatrixSet=WGS84_Pseudo-Mercator&api-key=7cd2ddae-9f2e-481c-99d0-404e7bc7a0b2'
).then(function (map) {
  map.addControl(new FullScreen());
});