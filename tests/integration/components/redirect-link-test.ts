import { module, test } from 'qunit';
import { setupRenderingTest } from 'chase-whales/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | redirect-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      hbs`<RedirectLink @title="Some title" @url="https://chasewhales.com" />`,
    );

    assert.dom().hasText('Redirecting you to: Some title 10');
  });
});
