class Pages {
  constructor() {
    this.pages = document.querySelectorAll('.page');
    this.components = document.querySelectorAll('.component');
  }

  render({ thisPage, pageId }) {
    if (thisPage.classList.contains('d-none')) {
      const { pages, components } = this;
    
      pages.forEach((page) => this._filteredPage({ page, pageId }));
  
  
      if (pageId !== 'mainPage') {
        components.forEach((component) => {
          component.classList.add('d-none');
        });
      } else {
        components.forEach((component) => {
          component.classList.remove('d-none');
        });
      }
    }
  }

  _filteredPage({ page, pageId }) {
    if (page.id === pageId) {
      page.classList.remove('d-none');
    }  else {
      page.classList.add('d-none')
    }
  }
}

const pages = new Pages();

export default pages;