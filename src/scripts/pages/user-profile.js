import authButton from '../components/main/_auth-button';

class UserProfile {
  constructor() {
    this.userProfilePage = document.querySelector('#userProfilePage');
    this.mainPage = document.querySelector('#mainPage');
    this.appHeader = document.querySelector('#appHeader');
    this.floatBottom = document.querySelector('#floatBottom');
  }

  render() {
    const { 
      userProfilePage, mainPage, appHeader, floatBottom 
    } = this;

    if (userProfilePage.classList.contains('d-none')) {
      this._show({ addPage: userProfilePage });
      this._hide({
        removePage: mainPage,
        removeComponents: [
          appHeader, floatBottom,
        ],
      });

      authButton.render();
    } 
  }

  _show({ addPage }) {
    addPage.classList.remove('d-none');
  }

  _hide({ removePage, removeComponents }) {
    removePage.classList.add('d-none');
    removeComponents
      .forEach((removeComponent) => removeComponent.classList.add('d-none'));
  }
}

const userProfile = new UserProfile();

export default userProfile;