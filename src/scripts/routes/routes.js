import userProfile from '../pages/user-profile';
import mainPage from '../pages/main-page';

class Routes {

  _isUrl(url) {
    return location.hash === url;
  }

  renderPage() {
    if (this._isUrl('')) {
      mainPage.render();
    }

    if (this._isUrl('#user-profile')) {
      location.hash = '/user-profile';
      userProfile.render();
    }
  }
}

const routes = new Routes();

export default routes;