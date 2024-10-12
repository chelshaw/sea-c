import { module, test } from 'qunit';
import { setupRenderingTest } from 'chase-whales/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | resource-desc/a03q', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ResourceDesc::A03q />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ResourceDesc::A03q>
        template block text
      </ResourceDesc::A03q>
    `);

    assert.dom().hasText('template block text');
  });
});
