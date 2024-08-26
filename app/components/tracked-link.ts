import { debug } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export interface TrackedLinkSignature {
  Args: {
    url: string;
    title: string;
  };
  // The element to which `...attributes` is applied in the component template
  Element: 'a';
}

export default class TrackedLinkComponent extends Component<TrackedLinkSignature> {
  @action trackLink() {
    debug(`TODO: track link to ${this.args.title}`);
  }
}
