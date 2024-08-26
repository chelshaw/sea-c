import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export interface RedirectLinkSignature {
  // The arguments accepted by the component
  Args: {
    url: string;
    title: string;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class RedirectLinkComponent extends Component<RedirectLinkSignature> {
  @tracked time = 10;

  constructor(owner: unknown, args: RedirectLinkSignature['Args']) {
    super(owner, args);
    if (!Ember.testing) {
      this.waitThenRedirect.perform(1000);
    }
  }

  waitThenRedirect = task(async (ms: number) => {
    while (this.time > 0) {
      await timeout(ms);
      this.time = this.time - 1;
    }
    await timeout(ms);
    window.location.assign(this.args.url);
  });

  @action cancelRedirect() {
    this.waitThenRedirect.cancelAll();
  }
}
