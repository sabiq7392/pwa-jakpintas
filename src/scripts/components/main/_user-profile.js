class UserProfile extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
  }

  _template() {
    this.innerHTML = `
      <div class="title">
        <a href="#" aria-label="return main page">
          <i class="bi bi-arrow-left"></i>
        </a>
        <h1>User Profile</h1>
      </div>
      <div class="container-user">
        <img 
          id="userImage" 
          src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" 
          alt="user image"
        />

        <p id="userName"></p>
        <p id="userEmail"></p>

        <div class="d-flex gap-md">
          <div 
            class="g-signin2" 
            data-onsuccess="onSignIn"
            style="height: 44px;"
          >
          </div>

          <button 
            href="#" 
            onclick="signOut();"
            class="btn-sign-out"
          >
            Sign out
          </button>
        </div>
      </div>
    `
  }
}

customElements.define('user-profile', UserProfile);