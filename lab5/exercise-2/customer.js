var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fname, " ").concat(this.lname));
    };
    return Customer;
}());
var aCustomer = new Customer();
aCustomer.fname = "Franz";
aCustomer.lname = "lizst";
aCustomer.greeter();
