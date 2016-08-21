//require('mocha');

exports.config = {
  baseUrl: 'http://localhost:3000/',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'mocha',

  specs: [
    'src/test/e2e/**/*.js'
  ],
  exclude: [],

  mochaOpts: {
    reporter: "spec",
    slow: 3000
  },

  allScriptsTimeout: 5000,
  useAllAngular2AppRoots: true
};
