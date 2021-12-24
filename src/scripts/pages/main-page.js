class MainPage {
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

    if (mainPage.classList.contains('d-none')) {
      this._show({
        addPage: mainPage,
        addComponents: [
          appHeader, floatBottom,
        ],
      });

      this._hide({ removePage: userProfilePage });
    }
  }

  _show({ addPage, addComponents }) {
    addPage.classList.remove('d-none');
    addComponents
      .forEach((addComponent) => addComponent.classList.remove('d-none'));
  }

  _hide({ removePage }) {
    removePage.classList.add('d-none');
  }
}

const mainPage = new MainPage();

export default mainPage