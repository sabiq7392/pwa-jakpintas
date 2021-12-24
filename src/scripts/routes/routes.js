import userProfile from '../pages/user-profile';

class Routes {

  _isUrl(url) {
    return location.hash === url;
  }

  renderPage() {
    if (this._isUrl('#user-profile')) {
      userProfile.render();
    }
  }
}

const routes = new Routes();

export default routes;