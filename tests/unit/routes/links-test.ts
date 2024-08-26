import { module, test } from 'qunit';
import { setupTest } from 'chase-whales/tests/helpers';

module('Unit | Route | links', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:links');
    assert.ok(route);
  });
});
