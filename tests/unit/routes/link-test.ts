import { module, test } from 'qunit';
import { setupTest } from 'chase-whales/tests/helpers';

module('Unit | Route | link', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:link');
    assert.ok(route);
  });
});
