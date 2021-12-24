import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class MapBox extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
    this._setupMap();
  }
  
  _template() {
    this.innerHTML = `
      <div id="map"></div>
    `;
  }

  _token() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FiaXFtYW1lIiwiYSI6ImNrb3djeDFxdTA0NXAybmx4a25sNTg0OWoifQ.yu_-5Imtn9jA0bkF6PbvLA';
  }

  _setupMap() {
    this._token();

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    this._partNav({ map, position: 'bottom-right' });
    this._removeDefaultPart('.mapboxgl-ctrl-attrib');
    this._removeDefaultPart('.mapboxgl-ctrl-logo');
  }

  _removeDefaultPart(part) {
    const defaultPart = document.querySelector(part);
    defaultPart.remove();
  }

  _partNav({ map, position }) {
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, position);
  }
}

customElements.define('map-box', MapBox);