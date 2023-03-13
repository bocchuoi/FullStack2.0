class Customer {
    private fname: string;
    private lname: string;
    
    constructor(fname: string, lname: string){
        this.lname = lname
        this.fname = fname
    }

    public greeter(){
        console.log(`Hello ${this.fname} ${this.lname}`);
    }
}

let aCustomer = new Customer("Franz", "lizst")
aCustomer.greeter()