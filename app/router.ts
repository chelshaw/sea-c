import EmberRouter from '@ember/routing/router';
import config from 'chase-whales/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('zine', { path: '/z/:zine_id' });
  this.route('resource', { path: '/r/:resource_id' });
  this.route('page-not-found', { path: '/*' });
});
