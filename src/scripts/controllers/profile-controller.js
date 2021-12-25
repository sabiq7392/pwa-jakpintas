import pages from "../pages/Pages";

class ProfileController {
  constructor() {
    this.profilePage = document.querySelector('#profilePage');
  }

  render() {
    const { profilePage } = this;
    pages.render({ 
      thisPage: profilePage, 
      pageId: 'profilePage' 
    });
  }
}

const profileController = new ProfileController();

export default profileController;