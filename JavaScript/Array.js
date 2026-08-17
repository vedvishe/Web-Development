// let marks=[50,30,40,60,70,80,90];
// for(let i=0; i<marks.length;i++){
//     console.log(marks[i]);
// }

// // for of loop

// for(let num of marks){
//     console.log(num);
// }


// // console.log(marks);
// // console.log(marks.length);


// // let arr=[100, "ved" , "rohit" ,true];
// // console.log(arr[2]);

// // arr[1]="yash";
// // console.log(arr);

// // // /push elements

// // arr.push(90);
// // console.log(arr);


// // // pop

// // arr.pop();
// // console.log(arr);

// // // add a Element. at start of array

// // arr.unshift("vishakha");
// // console.log(arr);


// let arr=[10,20,30,40,50,60,70,80,90,100];
// let arr2=arr.slice(1,5);
// console.log(arr2);
// console.log(arr);
// console.log(arr.splice(1,3));



// concatination of array

// let arr=[10,20,30,40,50,60,70,80,90,100];
// let arr2=[200,300,400,500,600];
// let arr3 =arr.concat(arr2);
// console.log(arr3);

// const arr=["ved" ,"yash","bob","rohit","jordan","bua"];
// // console.log(arr.toString());

// // console.log(arr.indexOf ("bob"));

// // sorting arrays

// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);


// asceding order

// const arr=[10 ,2 ,3, 45 ,60 ,55 ,80 ];
// arr.sort((a ,b)=>a-b);
// console.log(arr);

// // Descending order

// arr.sort((a,b)=>b-a);
// console.log(arr);


// flatning the array

const arr=[10,20,30,[80,90,100],40]
// console.log(arr);
console.log(arr[3][0]);
console.log(arr[3][1]);
const a=arr.flat(Infinity);
console.log(a);
