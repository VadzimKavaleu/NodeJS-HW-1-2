console.log("ES6");

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get name(){
        return this._name;
    }
    set name(val){
        this._name = val;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
    show(){
        return "User: "+this.name+", "+this.age;
    }
}

class Worker extends User {
    constructor(name, description, experience){
        super(name, description);
        this.experience = experience;
    }
    get experience(){
        return this._experience;
    }
    set experience(exp){
        this._experience = exp;
    }
    show(){
        return "Worker: "+this.name+", "+this.age+", "+this.experience;
    }
}
let user6 = new User("Oleg", 44);
let worker6 = new Worker("Nick", 21, 2);
console.log(user6.show());
console.log(worker6.show());
