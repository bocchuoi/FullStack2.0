export class Customer {
    private fname: string;
    private lname: string;
    private age: number;
    
    constructor(fname: string, lname: string, age: number){
        this.lname = lname
        this.fname = fname
        this.age = age
    }

    public greeter(){
        console.log(`Hello ${this.fname} ${this.lname}`);
    }

    public getAge(){
        console.log(`${this.fname} ${this.lname} is ${this.age} years old`);
    }
}

