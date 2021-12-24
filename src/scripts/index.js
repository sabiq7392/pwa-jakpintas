import 'regenerator-runtime';
import '../styles/index.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss'
import './components/main/Main';
import './components/header/Header';
import './components/float-bottom/Float-Bottom';
import routes from './routes/routes';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
  routes.renderPage();
  swRegister();
});

window.onhashchange = () => {
  routes.renderPage();
};


