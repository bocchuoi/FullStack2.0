"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(fname, lname, age) {
        this.lname = lname;
        this.fname = fname;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fname, " ").concat(this.lname));
    };
    Customer.prototype.getAge = function () {
        console.log("".concat(this.fname, " ").concat(this.lname, " is ").concat(this.age, " years old"));
    };
    return Customer;
}());
exports.Customer = Customer;
