class BottomNavbar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
  }

  _template() {
    this.innerHTML = `
      <nav>
        <div aria-label="open swipe up menu">
          <div class="icon-line"></div>
        </div>
        <div class="container-action-link">
          <a href="/" class="action-link">
            <span class="icon">
              <i class="bi bi-geo-alt-fill"></i>
            </span>
            <span class="text">Profil</span>
          </a>
          <a href="/" class="action-link">
            <span class="icon">
              <i class="bi bi-file-bar-graph-fill"></i>
            </span>
            <span class="text">Ekonomi</span>
          </a>
          <a href="/" class="action-link">
            <span class="icon">
              <i class="bi bi-dpad-fill"></i>
            </span>
            <span class="text">Akses</span>
          </a>
        </div>
      </nav>
    `;
  }
}

customElements.define('bottom-navbar', BottomNavbar);