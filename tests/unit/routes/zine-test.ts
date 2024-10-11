import { module, test } from 'qunit';
import { setupTest } from 'chase-whales/tests/helpers';

module('Unit | Route | zine', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:zine');
    assert.ok(route);
  });
});
