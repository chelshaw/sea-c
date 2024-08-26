import { module, test } from 'qunit';
import { setupRenderingTest } from 'chase-whales/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tracked-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TrackedLink />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TrackedLink>
        template block text
      </TrackedLink>
    `);

    assert.dom().hasText('template block text');
  });
});
