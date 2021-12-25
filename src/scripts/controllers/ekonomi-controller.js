import pages from "../pages/Pages";

class EkonomiController {
  constructor() {
    this.ekonomiPage = document.querySelector('#ekonomiPage');
  }

  render() {
    const { ekonomiPage } = this;
    pages.render({ 
      thisPage: ekonomiPage,
      pageId: 'ekonomiPage' 
    });
  }
}

const ekonomiController = new EkonomiController();

export default ekonomiController;