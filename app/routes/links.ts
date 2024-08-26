import Route from '@ember/routing/route';
import { redirectLinks } from '../utils/links';

export default class LinksRoute extends Route {
  model() {
    return redirectLinks;
  }
}
