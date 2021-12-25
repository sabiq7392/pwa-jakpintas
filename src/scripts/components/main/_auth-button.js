class AuthButton {
  constructor() {
    this.username = document.querySelector('#userName');
    this.signOut = document.querySelector('.btn-sign-out');
    this.signIn = document.querySelector('.g-signin2');
  }

  render() {
    const { username, signOut, signIn } = this;

    if (username.textContent !== '') {
      signOut.classList.remove('d-none');
      signIn.classList.add('d-none');
    } else {
      signOut.classList.add('d-none');
      signIn.classList.remove('d-none');
    }
  }
}

const authButton = new AuthButton();

export default authButton;
