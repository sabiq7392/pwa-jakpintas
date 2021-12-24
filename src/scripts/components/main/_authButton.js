class AuthButton {
  constructor() {
    this.signIn = document.querySelector('.g-signin2');
    this.username = document.querySelector('#userName');
    this.signOut = document.querySelector('.btn-sign-out');
  }

  render() {

    if (this.username.textContent !== '') {
      this.signOut.classList.remove('d-none');
      this.signIn.classList.add('d-none');
    } else {
      console.log('hai')
      this.signOut.classList.add('d-none');
      this.signIn.classList.remove('d-none');
    }
  }
}

const authButton = new AuthButton();

export default authButton;
