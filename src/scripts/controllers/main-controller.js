import pages from "../pages/Pages";

class MainController {
  constructor() {
    this.mainPage = document.querySelector('#mainPage');
  }

  render() {
    const { mainPage } = this;
      
    if (mainPage.classList.contains('d-none')) {
      pages.render({ 
        thisPage: mainPage, 
        pageId: 'mainPage' 
      });
    }
  }
}

const mainController = new MainController();

export default mainController;