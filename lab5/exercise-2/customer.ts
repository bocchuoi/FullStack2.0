class Customer {
    fname: string;
    lname: string;

    public greeter(){
        console.log(`Hello ${this.fname} ${this.lname}`);
    }
}

let aCustomer = new Customer()
aCustomer.fname = "Franz"
aCustomer.lname = "lizst"
aCustomer.greeter()