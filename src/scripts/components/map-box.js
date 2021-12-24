import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class MapBox extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
    this._map();
  }
  
  _template() {
    this.innerHTML = `
      <div id="map"></div>
    `;
  }

  _token() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FiaXFtYW1lIiwiYSI6ImNrb3djeDFxdTA0NXAybmx4a25sNTg0OWoifQ.yu_-5Imtn9jA0bkF6PbvLA';
  }

  _map() {
    this._token();
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }
}

customElements.define('map-box', MapBox);