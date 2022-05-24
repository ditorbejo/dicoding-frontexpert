/* eslint-disable no-use-before-define */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/main.scss';
import WebSocketInitiator from './utils/web-socket-initiator';
import App from './views/app';
import swRegister from './utils/sw-register';
import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.hamburger-button'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

const skipContent = document.querySelector('.skip-link');
const detailContent = document.getElementById('maincontent');
skipContent.onclick = e => {
  e.preventDefault();
  console.log(detailContent);
  detailContent.focus();
};
