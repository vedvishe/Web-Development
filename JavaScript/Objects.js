// //  object creation 

// const person ={
//     name: "ved",
//     age:20,
//     gender:"male",
//     email :"ved@gmail.com"
// }

// console.log( typeof person);

// console.log(person.name);

// //  CRUD operation : create ,read,,update, delete

// // create
// person.city="shahapur";
// person.salary= 50000;

// console.log(person);


// // read
// console.log(person.salary);
// console.log(person.email);


// // update

// person.salary=100000;
// person.city="kinhavali";
// console.log(person.salary);
// console.log(person.city);

// // delete
 
// delete person.salary;
// delete person.age;
// console.log(person);


// const user2 = person;
// user2.age=21;
// console.log(person);


// console.log(Object.keys(person));
// console.log(Object.values(user2));

// for(keys in person){
//     console.log(keys);
//     console.log(keys +":"+[person[keys]]);
// }


// // const name =person.name;
// // const gender = person.gender;
// // console.log(name,gender);
// //  write this in a standerd way like this:

// // object destructuring
// const {name,gender,email}= person;
// console.log(name,gender,email);


// you can also create a function in obejct 
// const person={
//     name:"ved",
//     age:21,
//     city:"shahapur",
//     email:"ved@gmail.com",

//     hello: function(){
//         console.log("hello my name is"+this.name);
//         return this.age;
//     }
// }


// const result = person.hello();
// console.log(result);


// Nested objects

const student={
    name:"ved",
    age:22,
    gender:"male",
    addres:{
        village:"Mugaon",
        tal:"shahpur",
        dist:"thane"
    }
}
console.log(student.addres.village);


