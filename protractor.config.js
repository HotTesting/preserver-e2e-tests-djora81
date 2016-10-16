"use strict";

exports.config = {
    baseUrl: 'http://www.hiteshbalar.com',
  specs: ['./specs_notes/*_spec.js'],
  directConnect: true,
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome'
  },
  useAllAngular2AppRoots: true,

  onPrepare: function () {

    
    beforeEach(function () {
        browser.get('/preserver/notes'),
        browser.sleep(1000);
    });

    afterEach(function () {
       
        browser.manage().deleteAllCookies();
        browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
        function (err) {
            
        });
    });

    let JasmineReporter = require('jasmine2-reporter').Jasmine2Reporter

    let options = {
      pendingSpec: false,
      symbols: {
        pending: '*  '.strikethrough,
      }
    };
    
    jasmine.getEnv().addReporter(new JasmineReporter(options));
  }

  
};