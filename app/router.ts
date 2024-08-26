import EmberRouter from '@ember/routing/router';
import config from 'chase-whales/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('links');
  this.route('link', { path: '/l/:slug' });
  this.route('page-not-found', { path: '/*' });
});
