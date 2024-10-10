'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    babel: {
      plugins: [
        // ... any other plugins
        require.resolve('ember-concurrency/async-arrow-task-transform'),

        // NOTE: put any code coverage plugins last, after the transform.
      ],
    },

    fingerprint: {
      enabled: true,
      extensions: ['css'],
    },

    // prember: {
    //   urls: generateLinks,
    // },
  });

  app.import('node_modules/normalize.css/normalize.css');

  return app.toTree();
};
