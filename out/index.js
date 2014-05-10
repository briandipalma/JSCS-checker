"use strict";
Object.defineProperties(exports, {
  configureJSCS: {get: function() {
      return configureJSCS;
    }},
  checkFileWithJSCS: {get: function() {
      return checkFileWithJSCS;
    }},
  __esModule: {value: true}
});
var Log = $traceurRuntime.assertObject(require("fell")).Log;
var $__0 = $traceurRuntime.assertObject(require("path")),
    sep = $__0.sep,
    join = $__0.join;
var Promise = require("bluebird");
var Checker = require("jscs/lib/checker");
var checker = new Checker();
function configureJSCS() {
  return new Promise((function(resolve, reject) {
    try {
      var jscsConfiguration = require(join(__dirname, "..", "conf", "jscs.json"));
      checker.registerDefaultRules();
      checker.configure(jscsConfiguration);
      resolve();
    } catch (error) {
      reject(error);
    }
  }));
}
;
function checkFileWithJSCS(filePath) {
  checker.checkFile(filePath).then(afterJSCSCheck);
}
;
function afterJSCSCheck(errors) {
  errors.getErrorList().forEach((function(error) {
    var explainedError = errors.explainError(error);
    Log.error(explainedError);
  }));
}
