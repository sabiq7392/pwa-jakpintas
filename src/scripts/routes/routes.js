import userProfileController from '../controllers/user-profile-controller';
import mainController from '../controllers/main-controller';
import profileController from '../controllers/profile-controller';
import ekonomiController from '../controllers/ekonomi-controller';

class Routes {

  _isUrl(url) {
    return location.hash === url;
  }

  renderPage() {
    if (this._isUrl('')) {
      mainController.render();
    }

    if (this._isUrl('#user-profile')) {
      location.hash = '/user-profile';
      userProfileController.render();
    }

    if (this._isUrl('#profile')) {
      location.hash = '/profile';
      profileController.render();
    }

    if (this._isUrl('#ekonomi')) {
      location.hash = '/ekonomi';
      ekonomiController.render();
    }
  }
}

const routes = new Routes();

export default routes;