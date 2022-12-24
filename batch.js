#! /usr/bin/env node
"use strict";
exports.__esModule = true;
exports.Batch = void 0;
var chalk_1 = require("chalk");
var Batch = /** @class */ (function () {
    function Batch() {
        this.count = 0;
        this.batchId = [];
        this.batchName = [];
        this.year = [];
    }
    Batch.prototype.addNewBatch = function () {
        var batchDate = new Date();
        this.batchId.push(++this.count);
        this.batchName.push("Batch " + this.count);
        this.year.push(batchDate.getFullYear());
        console.log(chalk_1["default"].yellow("New Batch has been Created Automatically...\n"));
    };
    Batch.prototype.getBatchDetails = function () {
        var _this = this;
        if (this.batchId.length) {
            this.batchId.forEach(function (num1, index) {
                var num2 = _this.batchName[index];
                var num3 = _this.year[index];
                console.log(chalk_1["default"].green("Batch ID: ".concat(num1, " Batch Name: ").concat(num2, " Year: ").concat(num3, " ")));
            });
        }
        else {
            console.log(chalk_1["default"].red("Batch not available"));
        }
    };
    return Batch;
}());
exports.Batch = Batch;
