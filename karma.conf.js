typing// Referenced: https://templecoding.com/blog/2016/02/02/how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack/

var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
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
