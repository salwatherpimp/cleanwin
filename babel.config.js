module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          // Target modern browsers only
          targets: {
            browsers: [
              'defaults and supports es6-module',
              'not IE 11',
              'not dead'
            ]
          },
          // Disable polyfills for modern browsers
          useBuiltIns: false,
          // Use native modules
          modules: false,
          // Exclude legacy transforms
          exclude: [
            'transform-typeof-symbol',
            'transform-async-to-generator',
            'transform-regenerator'
          ]
        }
      }
    ]
  ],
  // Only transform for older Node.js in server builds
  env: {
    production: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              targets: {
                browsers: [
                  'defaults and supports es6-module',
                  'not IE 11',
                  'not dead'
                ]
              },
              useBuiltIns: false,
              modules: false
            }
          }
        ]
      ]
    }
  }
};
