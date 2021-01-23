
import 'ol/ol.css';
import FullScreen from 'ol/control/FullScreen';
import apply from 'ol-mapbox-style';
import Hash from './hash';
import proj4 from 'proj4';
import Map from 'ol/Map';
import { register } from 'ol/proj/proj4';


proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
//proj4.defs("EPSG:3067", "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
register(proj4);

const tileVer = 'v20', styleVer = 'v20',
  tileMatrixSet = 'WGS84_Pseudo-Mercator',
  apiKey = '7cd2ddae-9f2e-481c-99d0-404e7bc7a0b2',
  styleUrl = `https://avoin-karttakuva.maanmittauslaitos.fi/vectortiles/stylejson/${styleVer}/taustakartta.json?TileMatrixSet=${tileMatrixSet}&api-key=${apiKey}`;

const hash = new Hash(),
  map = new Map({ target: 'map' });
hash.addTo(map);

fetch(styleUrl).then(r => r.json()).then(styleJson => {
  apply(
    map, styleJson).then(function (map) {
      map.addControl(new FullScreen());
      window.map = map;
    });
});

