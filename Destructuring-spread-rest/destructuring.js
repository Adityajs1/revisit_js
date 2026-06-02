// Destructuring
// Destructuring is just a shortcut for pulling values out of an object.
const [a, b, c] = [1, 2, 4]
console.log(a, b, c);

const [first, , third] = [10, 20, 30];
console.log(first, third); // 10 30

const { name, role = "guest" } = user;
console.log(role); 

//Object destructuring
const person = {
    name: "Aditya",
    age: 19,
    city: "Dadri"
};

const { age, city } = person;

console.log(age);
console.log(city);

// // Spread

// // IN Arrays
// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const combined = [...a, ...b];
// console.log(combined); 

// // In Objects

// const defaults = { theme: "dark", lang: "en" };
// const userPrefs = { lang: "hi", fontSize: 16 };

// const config = { ...defaults, ...userPrefs };
// console.log(config);

// // In Functions
// function add(a, b, c) {
//   return a + b + c;
// }

// const nums = [1, 2, 3];
// console.log(add(...nums));

// // Rest

// //In Arrays
// const [first, second, ...remaining] = [1, 2, 3, 4, 5];
// console.log(first);
// console.log(second);
// console.log(remaining);

// // In Objects

// const {name, ...rest} = {name : "Aditya", age : 19, city : "Noida"}
// console.log(name)
// console.log(rest);

// // In function

// function sum(...nums){
//     return nums.reduce((acc, n)=> acc+n, 0)
// }
// console.log(sum(242, 534, 3423, 35345));



