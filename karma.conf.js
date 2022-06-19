// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'detectBrowsers'],

        // configuration
        detectBrowsers: {
          // enable/disable, default is true
          enabled: true,

          // enable/disable phantomjs support, default is true
          usePhantomJS: false,

          // use headless mode, for browsers that support it, default is false
          preferHeadless: true,

          // post processing of browsers list
          // here you can edit the list of browsers used by karma
          postDetection: function(availableBrowsers) {
            /* Karma configuration with custom launchers
              customLaunchers: {
                IE9: {
                  base: 'IE',
                  'x-ua-compatible': 'IE=EmulateIE9'
                }
              }
            */

              // //Add IE Emulation
              var result = availableBrowsers;

              // if (availableBrowsers.indexOf('IE')>-1) {
              //   result.push('IE9');
              // }

              //Remove PhantomJS if another browser has been detected
              if (availableBrowsers.length > 1 && availableBrowsers.indexOf('PhantomJS')>-1) {
                var i = result.indexOf('PhantomJS');

                if (i !== -1) {
                  result.splice(i, 1);
                }
              }

              //Remove IE if another browser has been detected
              if (availableBrowsers.length > 1 && availableBrowsers.indexOf('IE')>-1) {
                var i = result.indexOf('IE');

                if (i !== -1) {
                  result.splice(i, 1);
                }
              }

              //Remove IE9 if another browser has been detected
              if (availableBrowsers.length > 1 && availableBrowsers.indexOf('IE9')>-1) {
                var i = result.indexOf('IE9');

                if (i !== -1) {
                  result.splice(i, 1);
                }
              }

              return result;
            }
        },

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-detect-browsers'),
      require('karma-edgium-launcher'),
      require('karma-firefox-launcher'),
      require('karma-opera-launcher'),
      require('karma-ie-launcher'),
      require('karma-safari-launcher')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/video-game-store'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Edge', 'Chrome', 'Firefox', 'Safari', 'Opera'],
    singleRun: false,
    restartOnFileChange: true
  });
};
