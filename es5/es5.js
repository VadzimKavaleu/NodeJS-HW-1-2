console.log("ES5");
function User(name, age){
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    }
    this.setname = function(name){
        this.name = name;
    }
    this.getAge = function(){
        return this.age;
    }
    this.setAge = function(age){
        this.age = age;
    }
    
}
User.prototype.show = function(){
    return "User: "+this.name+", "+this.age;
};

function Worker(name, age, experience){
    User.call(this, name, age);
    this.experience = experience;
    this.getExperience = function(){
        return this.experience;
    }
    this.setEperience = function(experience){
        this.experience = experience;
    }
}
Worker.prototype = Object.create(User.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.show = function(){
    return "Worker: "+this.name+", "+this.age+", "+this.experience;
}
var user = new User("Vasya", 22);
var worker = new Worker("Petya", 33, 10);
console.log(user.show());
console.log(worker.show());


