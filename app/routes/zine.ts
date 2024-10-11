import Route from '@ember/routing/route';
import { allZines } from 'chase-whales/utils/links';

export default class ZineRoute extends Route {
  model(params: { zine_id: string }) {
    const resources = allZines()[params.zine_id];
    if (!resources) {
      throw new Error('not found');
    }
    return resources;
  }
}
