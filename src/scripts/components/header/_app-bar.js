class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
  }

  _template() {
    this.innerHTML = `
      <nav id="appBar">
        <button type="button" aria-label="open menu">
          <i class="bi bi-list"></i>
        </button>
        <input 
          type="search"
          placeholder="cari lokasi..."
        />
        <a href="" aria-label="profile">
          <i class="bi bi-person-circle"></i>
        </a>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
