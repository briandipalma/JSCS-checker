import {sep} from "path";
import {Log} from "fell";

module Promise from "bluebird";
module Checker from "jscs/lib/checker";

//var checker = {};

console.info("Checker is", Checker);
console.info("Promise is", Promise);

///**
// * Calling this will initialise and configure JSCS.
// *
// * @returns {Promise} A Promise that resolves once JSCS is created and configured.
// */
//exports.configureJSCS = function configureJSCS() {
//	return new Promise(function(resolve, reject) {
//
//		try {
//			var jscsConfiguration = require(path.join(__dirname, "..", "conf", "jscs.json"));
//
//			checker = new Checker();
//
//			checker.registerDefaultRules();
//			checker.configure(jscsConfiguration);
//
//			resolve();
//		} catch (error) {
//			reject(error);
//		}
//	});
//};
//
///**
// * Once JSCS is configured calling this will style check the provided JS files.
// *
// * @param {string} filePath - Path of JS file to check with JSCS.
// */
//exports.checkFileWithJSCS = function checkFileWithJSCS(filePath) {
//	checker.
//	    checkFile(filePath).
//	    then(afterJSCSCheck);
//};
//
///**
// * Called once a JS file has been processed by JSCS with a list of all styling errors within the file.
// *
// * @private
// * @param {jscs/lib/Errors} errors - The JSCS Errors object which can be used to report on all style errors within the checked JS files.
// */
//function afterJSCSCheck(errors) {
//	errors.getErrorList().forEach(function(error) {
//		var explainedError = errors.explainError(error);
//		Log.error(explainedError);
//	});
//}
