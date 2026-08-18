//  object creation 

const person ={
    name: "ved",
    age:20,
    gender:"male",
    email :"ved@gmail.com"
}

console.log( typeof person);

console.log(person.name);

//  CRUD operation : create ,read,,update, delete

// create
person.city="shahapur";
person.salary= 50000;

console.log(person);


// read
console.log(person.salary);
console.log(person.email);


// update

person.salary=100000;
person.city="kinhavali";
console.log(person.salary);
console.log(person.city);

// delete
 
delete person.salary;
delete person.age;
console.log(person);