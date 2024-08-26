import Route from '@ember/routing/route';
import { redirectLinks } from '../utils/links';

export default class LinkRoute extends Route {
  links = redirectLinks;

  model({ slug }: { slug: string }) {
    const safeSlug = slug.toString();
    if (safeSlug in this.links) {
      return this.links[safeSlug];
    }
    throw { message: 'Not found', status: 404, slug };
  }
}
