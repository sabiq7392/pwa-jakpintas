import JakPintasSource from "../../data/jak-pintas-source";

class Profile extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  async _render() {
    try {
      const jakPintas = await JakPintasSource.getKelurahan('bangka');
      console.log(jakPintas.geometry.coordinates)
      this._template(jakPintas);
    } catch(error) {
      console.log(error)
    }
  }

  _template(jakPintas) {
    const { properties } = jakPintas
    this.innerHTML = `
      <div class="title">
        <a href="#" aria-label="return main page">
          <i class="bi bi-arrow-left"></i>
        </a>
        <h1>Profile</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th colspan="2">Lokasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Koordinat</td>
              <td>1921312312321</td>
            </tr>
            <tr>
              <td>Kelurahan</td>
              <td>${properties.Kelurahan}</td>
            </tr>
            <tr>
              <td>Kecamatan</td>
              <td>${properties.Kecamatan}</td>
            </tr>
            <tr>
              <td>Wilayah</td>
              <td>${properties.Kota}</td>
            </tr>
            <tr>
              <td>Luas</td>
              <td>${properties['luas-area']}</td>
            </tr>
            <tr>
              <td>Kepadatan</td>
              <td>${properties['Kepadatan-Penduduk']}</td>
            </tr>
            <tr>
              <td>Rasio Gini</td>
              <td>${properties.gini}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th colspan="2">Persil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kegiatan</td>
              <td>lorem</td>
            </tr>
            <tr>
              <td>Perkiraan</td>
              <td>lorem</td>
            </tr>
            <tr>
              <td>Harga</td>
              <td>lorem</td>
            </tr>
            <tr>
              <td>Tipe Hak</td>
              <td>lorem</td>
            </tr>
            <tr>
              <td>Luas</td>
              <td>lorem</td>
            </tr>      
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define('profile-element', Profile);