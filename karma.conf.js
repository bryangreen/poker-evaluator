// Referenced: https://templecoding.com/blog/2016/02/02/how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack/

var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
      {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
      {pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},

      'src/test/*.ts',
      'src/test/**/*.ts'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.ts': ['webpack'],
      'src/app/**/*.js': ['coverage']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['coverage', 'progress'],
    coverageReporter: [{
      type: 'html',
      dir: 'build/reports/coverage'
    }, {
      type: 'text-summary'
    }],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
