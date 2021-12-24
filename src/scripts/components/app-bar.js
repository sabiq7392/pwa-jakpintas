class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {

  }

  _template() {
    this.innerHTML = `
      
    `;
  }
}

customElements.define('app-bar', AppBar);
