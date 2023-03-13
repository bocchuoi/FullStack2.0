var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.lname = lname;
        this.fname = fname;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fname, " ").concat(this.lname));
    };
    return Customer;
}());
var aCustomer = new Customer("Franz", "lizst");
aCustomer.greeter();
