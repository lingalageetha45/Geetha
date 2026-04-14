// // Task 1: E-commerce Cart Total
// // 👉 Scenario: You are building a shopping cart
// // let cart = [
// //   {name: "Shirt", price: 500, qty: 2},
// //   {name: "Shoes", price: 1500, qty: 1},
// //   {name: "Cap", price: 300, qty: 3}
// // ]
// // ✅ Tasks:
// // Calculate total price using reduce
// // Print only products above 1000 price using filter
// // Get all product names in uppercase using map

// let cart = [
//   {name: "Shirt", price: 500, qty: 2},
//   {name: "Shoes", price: 1500, qty: 1},
//   {name: "Cap", price: 300, qty: 3}
// ];

// // Total price
// let totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
// console.log(totalPrice); //3400

// // Products above 1000
// let highest = cart.filter(item => item.price > 1000)
// console.log(highest[0]); //{name: 'Shoes', price: 1500, qty: 1}
// console.log(highest);

// // Product names uppercase
// let uppercase = cart.map(item => item.name.toUpperCase())
// console.log(uppercase); //  ['SHIRT', 'SHOES', 'CAP']


// //----------------------------------------------------------------------------------------------------------------------

// // 🚀 Task 2: Student Result System
// // 👉 Scenario: School result processing
// // let students = [
// //   {name: "Arun", marks: 85},
// //   {name: "Bala", marks: 45},
// //   {name: "Charan", marks: 60},
// //   {name: "Divya", marks: 30}
// // ]
// // ✅ Tasks:
// // Find failed students (marks < 50)
// // Check if any student got distinction (>80) using some
// // Check if all students passed (>35) using every
// // Find first student who failed using find

// let students = [
//   {name: "Arun", marks: 85},
//   {name: "Bala", marks: 45},
//   {name: "Charan", marks: 60},
//   {name: "Divya", marks: 30}
// ]

// // Failed students
// let failed = students.filter(item => item.marks < 50);
// console.log(failed);

// // Any distinction
// let distinction = students.some(item => item.marks > 80);
// console.log(distinction);

// // All passed (>35)
// let passed = students.every(item => item.marks > 35);
// console.log("All the Students are above 35" , passed);

// // First failed student
// let firstFailed = students.find(s => s.marks < 50);
// console.log(firstFailed.name)


// //----------------------------------------------------------------------------------------------------------------------

// // 🚀 Task 3: Employee Salary Analysis
// // 👉 Scenario: HR dashboard
// // let employees = [
// //   {name: "A", salary: 25000},
// //   {name: "B", salary: 40000},
// //   {name: "C", salary: 15000},
// //   {name: "D", salary: 50000}
// // ]
// // ✅ Tasks:
// // Increase salary by 10% using map
// // Get employees with salary > 30000
// // Calculate total salary expense
// // Sort employees by highest salary

// let employees = [
//   {name: "A", salary: 25000},
//   {name: "B", salary: 40000},
//   {name: "C", salary: 15000},
//   {name: "D", salary: 50000}
// ]

// // Increase salary by 10%
// let salaryIncrease = employees.map(sal => sal.salary*1.1)
// console.log(salaryIncrease); // [27500.000000000004, 44000, 16500, 55000.00000000001]

// // Salary > 30000
// let highSalary  = employees.filter(sal => sal.salary > 30000)
// console.log(highSalary ); //  {name: 'B', salary: 40000}{name: 'D', salary: 50000}

// // Total salary
// let totalSalary  = employees.reduce((sum,emp)=> sum + emp.salary,0)
// console.log(totalSalary) //130000

// // Sort by highest salary
// let sorted = [...employees].sort((a, b) => b.salary - a.salary);
// console.log(sorted); // {name: 'D', salary: 50000}

// //----------------------------------------------------------------------------------------------------------------------

// // 🚀 Task 4: String Real Use Case (Search System)
// // 👉 Scenario: Search feature
// // let products = ["Laptop", "Mobile", "Tablet", "Camera"]
// // ✅ Tasks:
// // Check if "Mobile" exists using includes
// // Convert all to lowercase
// // Find index of "Tablet"
// // Convert array to string using join("-")

// let products = ["Laptop", "Mobile", "Tablet", "Camera"];
// console.log(products)

// let include =products.includes("Mobile");
// console.log(include)

//  let str = products.join("-");
// console.log(str);

// let lowercase = products.map(item => item.toLowerCase());
// console.log(lowercase);

// let indexe = products.indexOf("Tablet");
// console.log(indexe);

// let finding = products.find(item => item === "Camera");
// console.log(finding);

// //----------------------------------------------------------------------------------------------------------------------

// // 🚀 Task 5: Date Real-Time Task (Age Calculator)
// // 👉 Scenario: User profile
// // ✅ Tasks:
// // Take DOB (hardcode or prompt)
// // Calculate current age
// // Print:
// // You are 22 years old

// let input = prompt("Enter your DOB (YYYY-MM-DD)");
// let dob = new Date(input);
// let today = new Date();

// let age = today.getFullYear() - dob.getFullYear();

// let m = today.getMonth() - dob.getMonth();
// if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
//   age--;
// }

// console.log(`You are ${age} years old`);

// //----------------------------------------------------------------------------------------------------------------------

// // 🚀 Task 6: Login Validation System
// // 👉 Scenario: Basic login check
// // let users = [
// //   {username: "admin", password: "1234"},
// //   {username: "user", password: "abcd"}
// // ]
// // ✅ Tasks:
// // Check if user exists using find
// // Validate username & password
// // Print:
// // "Login Success ✅"
// // "Invalid Credentials ❌"

// let users = [
//   {username: "admin", password: "1234"},
//   {username: "user", password: "abcd"}
// ];

// let inputname = prompt("Enter username:");
// let inputPass = prompt("Enter password:");

// let existUser = users.find(
//   user => user.username === inputname
// );

// if (existUser && existUser.password === inputPass) {
//   console.log("Login Success ✅");
// } else {
//   console.log("Invalid Credentials ❌");
// }

// //----------------------------------------------------------------------------------------------------------------------

// // 🚀 Task 7: Even Number Analyzer
// // let numbers = [10, 15, 20, 25, 30]
// // ✅ Tasks:
// // Get all even numbers
// // Check if any odd number exists
// // Check if all numbers are even
// // Find first number > 20

// let numbers = [10, 15, 20, 25, 30]

// // Even numbers
// let even = numbers.filter(num => num % 2===0);
// console.log(even);

// // Any odd
// let oddExist = numbers.some(num => num % 2 !== 0);
// console.log(oddExist);

// // All even
// let evenExist = numbers.every(num => num % 2 === 0);
// console.log(evenExist);

// // First > 20
// let firstBig  =  numbers.find(num => num >20);
// console.log(firstBig);

// //----------------------------------------------------------------------------------------------------------------------

// // 🎯 Bonus Challenge (🔥 Interview Level)
// // 👉 Combine everything
// // let orders = [
// //   {id: 1, amount: 500, status: "delivered"},
// //   {id: 2, amount: 1500, status: "pending"},
// //   {id: 3, amount: 2000, status: "delivered"}
// // ]
// // ✅ Tasks:
// // Total revenue of delivered orders
// // Get all pending orders
// // Check if any order > 1000
// // Sort orders by amount (ascending)

// let orders = [
//   {id: 1, amount: 500, status: "delivered"},
//   {id: 2, amount: 1500, status: "pending"},
//   {id: 3, amount: 2000, status: "delivered"}
// ];

// // Total revenue of delivered
// let revenue = orders
//   .filter((order) => order.status === "delivered")
//   .reduce((sum, order) => sum + order.amount, 0);
// console.log(revenue); //2500

// // Pending orders
// let pending = orders.filter((order) => order.status === "pending");
// console.log(pending); // {id:2, amt:1500 , status : pending}

// // Any order > 1000
// let bigOrder = orders.some((order) => order.amount > 1000);
// console.log(bigOrder); // true

// // Sort ascending
// let sorting = orders.sort((a,b) => a.amount - b.amount)
// console.log(sorting); 