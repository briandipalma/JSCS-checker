"use strict";
var __moduleName = "./src/index";
var sep = $traceurRuntime.assertObject(require("path")).sep;
var Log = $traceurRuntime.assertObject(require("fell")).Log;
var Promise = require("bluebird");
var Checker = require("jscs/lib/checker");
console.info("Checker is", Checker);
console.info("Promise is", Promise);
