import 'ol/ol.css';
import FullScreen from 'ol/control/FullScreen';
import apply from 'ol-mapbox-style';
import Map from 'ol/Map';
import Hash from './hash';

/* map style and version selections */
/* v20 is current vector tile content released in 2020-06 */
/* v21 will be available in 2021 */
/* versioned styleUrl refers to Style document with a link to versioned TileJson document which has links to the Vector Tiles */
const tileVer = 'v20', styleVer = 'v20',
  styleName = 'hobby',
  tileMatrixSet = 'WGS84_Pseudo-Mercator',
  /* get your own api key at maanmittauslaitos.fi */
  apiKey = '7cd2ddae-9f2e-481c-99d0-404e7bc7a0b2',
  styleUrl = `https://avoin-karttakuva.maanmittauslaitos.fi/vectortiles/stylejson/${styleVer}/${styleName}.json?TileMatrixSet=${tileMatrixSet}&api-key=${apiKey}`;

/* maplibre compatible location url hash */
const hash = new Hash(),
  map = new Map({ target: 'map' });
hash.addTo(map);

/* fetch style and apply to map */
fetch(styleUrl).then(r => r.json()).then(styleJson => {
  apply(
    map, styleJson).then(function (map) {
      map.addControl(new FullScreen());
    });
});

