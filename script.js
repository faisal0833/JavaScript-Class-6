// // Function Declaretions
// function calculateAge(birthYear){
//     return 2022 - birthYear;
// }

// const age1 = calculateAge(1988);
// console.log(age1);

//---------------------------------------------------

// // Function Expressions
// const calculateAgeNew = function(birthYear){
//     return 2022 - birthYear;
// }

// const age2 = calculateAgeNew(1975);
// console.log(age2);

//---------------------------------------------------

// // Arrow function
// // Example 1

// const calculateAgeAnother = birthyear => 2022 - birthyear;
// const age1 = calculateAgeAnother(2002);
// console.log(age1);

// // Example 2
// const calculateAgeAnother1 = birthyear => {
//     return 2022 - birthyear;
// };
// const age2 = calculateAgeAnother(1988);
// console.log(age2);

// // Real Life Example
// const jobLeft = birthyear => {
//     const age = 2022 - birthyear;
//     const ageLeft = 62- age;
//     return ageLeft;
// };

// const aAgeLeft = jobLeft(1972);
// console.log(aAgeLeft);
// console.log(`A job age left ${aAgeLeft} years!`);

// // Real Life Example (Short)
// const jobLeft = birthyear => {
//     const age = 2022 - birthyear;
//     return 62- age;
// };

// const aAgeLeft = jobLeft(1972);
// console.log(aAgeLeft);
// console.log(`A job age left ${aAgeLeft} years!`);

//---------------------------------------------------

// // Array
// const student1 = "Asif";
// const student2 = "Rakib";
// const student3 = "Rahim";

// console.log(student1);
// console.log(student2);
// console.log(student3);

// // Example 1
// const students = ["Asif", "Rakib", "Rahim"];
// console.log(students);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// // Example 2
// const players = new Array("Sakib", "Tamim", "Miraz");
// console.log(players[0]);
// console.log(players[1]);
// console.log(players[2]);

// const students = ["Asif", "Rakib", "Rahim"];
// console.log(students);
// students[0] = "Karim";
// console.log(students);

// // students = ["Student1", "Student2", "Student3"];
// console.log(students.length);

// // Get Array last item
// console.log(students[students.length - 1]);

// const user = ["Faisal", "Kabir", 1988, 2022 - 1988, "Affilate Marketer"];
// console.log(user);
// console.log(user[1]);
// console.log(user[2]);

//---------------------------------------------------

//Array Method

const users = ["User1", "User2", "User3"]
// console.log(users);

// // Push (Method 1 - Add Element At Last)
// users.push("User4");
// console.log(users);

// // Unshift (Method 2 - Add Element At First)
// users.unshift("First Users");
// console.log(users);

// // Pop (Method 3 - Delete Element At Last)
// users.pop();
// console.log(users);

// // Shift (Method 4 - Delete Element At First)
// users.shift();
// console.log(users);

console.log(users);
// const removeItem = users.pop();
// console.log(removeItem);
// console.log(users);

const removeItem = users.shift();
console.log(users);
console.log(removeItem);