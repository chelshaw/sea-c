'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

// const generateLinks = ({ distDir }) => {
//   return new Promise((resolve) => {
//     let urls = ['/', '/links'];
//     let redirectLinks = require(distDir + '/links.json');
//     for (let l of redirectLinks) {
//       urls.push(`/l/${l.slug}`);
//     }

//     resolve(urls);
//   });
// };

const env = EmberApp.env();

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
      enabled: env === 'production',
      extensions: ['css'],
    },

    // prember: {
    //   urls: generateLinks,
    // },
  });

  app.import('node_modules/normalize.css/normalize.css');

  return app.toTree();
};
