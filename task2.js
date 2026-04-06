// // Section 1: Printing & User Interaction
// // =======================================
// // Print your name and designation in the console.
// let name = "Gayathri"
// let designation = "developer"
// console.log("Name: Gayathri"); //Name : Gayathri
// console.log("Designation: Software Developer"); // Designation : developer
 
// // Show an alert saying "Welcome to JavaScript Session".
 
// alert("Welcome to JavaScript Session") // Welcome to JavaScript Session
 
// // Ask the user: "Do you like coding?" using confirm() and print the result.
 
// let a="Do u like Coding"
// let b=confirm(a)  // Do u like Coding - ok
// console.log(b) //true
 
// // Take user input for favorite food using prompt() and print it.
 
// let Userfavourite = prompt("Your favourite food")
// console.log(Userfavourite); // Mango
 
// // Display "Good Evening Team" on the UI using document.writeln().
 
// document.writeln("Good Evening Team Hi") // Good Evening Team
 
////-----------------------------------------------------------------------------------------------------------------------------
 
// // 🔹 Section 2: Console Methods
// // ===============================
 
// // Print a number using console.log().
// const a = 100
// console.log(a); //100
 
 
// // Print a warning message: "This is a warning".
 
// console.warn("This is warning");
 
// // Print an error message: "Something went wrong!".
 
// console.error("Something went wrong");
 
// // Clear the console after printing 3 messages.
 
// console.log("1");
// console.log("2");
// console.log("3");
// console.clear()
 
////-----------------------------------------------------------------------------------------------------------------------------
 
// // 🔹 Section 3: Data Types
// // ==========================
 
// // Create a variable with your name and print its type.
 
// let name = "Geetha"
// console.log(typeof(name)); // Type = String
 
// // Store your age and print the datatype.
 
// let num=22
// console.log(typeof(num)); //   Type = number
 
// // Store a boolean value (true/false) and print it.
 
// let boo = true
// console.log(typeof(boo)); // True // Type = Boolean
 
// // Declare a variable without value and print it.
 
// let a;
// console.log(a); // undefined
 
// // Assign null to a variable and print it.
 
// let b = null
// console.log(b); // null
 
////-----------------------------------------------------------------------------------------------------------------------------
 
// // 🔹 Section 4: Arrays
// // ======================
 
// // Create an array of 5 fruits and print it.
 
// let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"]
// console.log(fruits);
 
// // Print the first and last element of the array.
 
// console.log(fruits[0]);
//  console.log(fruits[fruits.length-1]); //apple and orangr
 
// // Add one more fruit dynamically and print updated array.
 
// fruits.push("pineapple")
// console.log("after adding:", fruits);

// // Remove the last element and print array.
 
// fruits.pop();
// console.log("after removing:", fruits); 

// // Find the length of the array.
 
// console.log("length:", fruits.length); //5
 
////----------------------------------------------------------------------------------------------------------------------------
 
// // 🔹 Section 5: Objects
// // =======================
// // Create an object for a student (name, age, course).
 
// const student ={
//     name:"Gayathri",
//     age:22,
//     course:"Developer",
//     college:"Geetha Engineering College"
// }
 
// // Print the student name.
 
// console.log(student.name) // Gayathri
 
// // Add a new property (college) dynamically.
 
// console.log(student.college ="Sagar Engineering College") //Sagar Engineering College
 
// // Access nested array inside object (like your fruit example).
 
// student.skills = ["HTML", "CSS", "JavaScript"];
// console.log(student.skills[0]); // HTML
 
// // Update a property value.
 
// student.course = "c# Developer";
// console.log(student.course);
 
 
 
////-----------------------------------------------------------------------------------------------------------------------------
 
// // 🔹 Section 6: Operators
// // =========================
// // Add two numbers and print result.
 
// console.log(2+6); //8
 
// // Subtract two numbers.
 
// console.log(2-4); //-2
 
// // Multiply two numbers.
 
// console.log(2*6); //12
 
// // Divide two numbers.
 
// console.log(2/4); //0.5
 
// // Find remainder using %.
 
// console.log(2%5); //2
 
// // Use exponent operator (**) to find power.
 
// console.log(2**3); // 2x2x2=8
 
////-----------------------------------------------------------------------------------------------------------------------------
 
// // 🔹 Section 7: Increment & Decrement
// // =====================================
// // Create a variable and use post increment.
 
// let a = 1;
// console.log(a++); // 1 (uses value first, then increments)
// console.log(a);   // 2

// // Create a variable and use pre increment.
 
// let b = 2;
// console.log(++b); // 3 // value update immediately
 
// // Show difference between num++ and ++num.
 
// Post Increment (num++) //First returns the current value then increment
// Pre Increment (++num) //first increments then give the updated value
 
// // Use decrement operator and print values.
 
// let b = 7;
// console.log(b--); // 7 (then becomes 6)
// console.log(--b); // 5 
 
// // Predict output before running (important logic task 👇)
 
// let a = 5;
// let b = a++;  // b = 5, a becomes 6
// let c = ++a;  // a becomes 7, c = 7
 
// console.log(a); //7
// console.log(b); //5
// console.log(c); //7
 
////-----------------------------------------------------------------------------------------------------------------------------
 
// // 🔹 Section 8: Real-Time Logic Tasks
// // =====================================
 
// // Ask user age and check if eligible to vote.
 
// let age = prompt("Enter your age:");

// let age = 18;
// if (age >= 18) {
//     console.log("You are eligible to vote"); // 18+ r eligible
// } 
// else {
//     console.log("You are not eligible to vote"); // below 18 r not
// }
 
// // Ask user name and greet: "Hello Geetha".
 
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// console.log("Hello " + name); //Hello Geetha
// console.log(" u r just " , age); // u r just  20
// console.log("Hello " + name ," u r just " , age); // Hello Geetha u r just  20
 
 
// // Store marks in array and print highest value.
 
// let marks = [70, 95, 82, 47, 78];
 
// let highMarks = Math.max(...marks);
// console.log("High marks:", highMarks);
 
// // Create object for fruits category (like your example) and access values.
 
// let fruits = {
//     yellowColor: ["mango", "banana"],
//     orangeColor: ["orange"],
//     redColor: ["apple", "grapes"]
// };
 
// console.log(fruits.yellowColor[1]); //banana
// console.log(fruits.orangeColor[0]); // orange
// console.log(fruits.redColor[1]);   // grapes
 
// // Combine prompt + array:
// // Ask user to enter 3 favorite fruits
// // Store in array
// // Print them
 
// let f1 = prompt("first fruit:");
// let f2 = prompt("second fruit:");
// let f3 = prompt("third fruit:");
 
// let favFruits = [f1, f2, f3];
 
// console.log(favFruits); // ['mango', 'apple', 'banana']
 
// //-----------------------------------------------------------------------------------------------------------------------------