import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { debug } from '@ember/debug';

export default class ApplicationRoute extends Route {
  @action
  error() {
    debug('TODO: log this error');
    return true;
  }
}
