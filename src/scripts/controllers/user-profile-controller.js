import authButton from '../components/main/_auth-button';
import pages from '../pages/Pages';

class UserProfileController {
  constructor() {
    this.userProfilePage = document.querySelector('#userProfilePage');
  }

  render() {
    const { userProfilePage } = this;
    pages.render({ 
      thisPage: userProfilePage, 
      pageId: 'userProfilePage' 
    });
    authButton.render();
  }
}

const userProfileController = new UserProfileController();

export default userProfileController;