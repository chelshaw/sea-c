import Route from '@ember/routing/route';
import { resources } from 'chase-whales/utils/links';

export default class ResourceRoute extends Route {
  model(params: { resource_id: string }) {
    const resource = resources[params.resource_id];
    if (!resource) {
      throw new Error('not found');
    }
    return resource;
  }
}
