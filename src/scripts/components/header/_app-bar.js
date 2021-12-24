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
        <a href="#user-profile">
          <img 
            id="userImageInAppBar"
            src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" 
            alt="user image"
          />
        </a>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);

{/* <a href="#user-profile" aria-label="user profile">
<i class="bi bi-person-circle"></i>
</a> */}