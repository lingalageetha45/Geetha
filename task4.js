// // Task 1: E-Commerce Discount System
// // ========================================
// // Concepts: function, parameters, return, condition
// // 👉 Build a function:
// // Input: product name, price
// // Apply:
// // If price > 1000 → 20% discount
// // Else → 10% discount
// // Return final price
// // 👉 Example:
// // calculateDiscount("Shoes", 2000)
// // 👉 Output:
// // Product: Shoes
// // Final Price: 1600

// function calculateDiscount(product, price) {
//     let finalPrice;

//     if (price > 1000) {
//         finalPrice = price - (price * 20) / 100;
//     } else {
//         finalPrice = price - (price * 10) / 100;
//     }

//     return `Product: ${product}\nFinal Price: ${finalPrice}`;
// }

// console.log(calculateDiscount("Shoes", 2000));

// //=============================================================================================
// // 🔹 Task 2: Order Processing using Callback
// // ================================================
// // Concepts: callback, higher order function
// // 👉 Create:
// // placeOrder(callback)
// // payment(amount)
// // orderSuccess()
// // 👉 Flow:
// // Place order
// // Call payment
// // Then success message
// // 👉 Expected Output:
// // Order placed
// // Payment of 500 successful
// // Order delivered

// function payment(amount) {
//     console.log(`payment of ${amount} successful`);    
// }

// function orderSuccess(){
//     console.log("Order delivered");
// }

// function placeOrder(callback) {
//     console.log("Order Placed");
//     callback(500);
//     orderSuccess();
// }

// placeOrder(payment);

// //=============================================================================================
// // 🔹 Task 3: Employee Data Loop System
// // ===========================================
// // Concepts: for loop, array, object
// // 👉 Create an array of employees:
// // [
// //  {name:"Navi", salary:50000},
// //  {name:"John", salary:70000}
// // ]
// // 👉 Task:
// // Loop and print:
// // Salary > 60000 → "High Salary"
// // Else → "Normal Salary"

// let employeeData = [
//   {name: "Sagar", salary: 50000},
//   {name: "Geetha", salary: 80000},
// ];

// for (let i in employeeData){
//     if (employeeData[i].salary > 60000){
//         console.log(employeeData[i].name , "High Salry")
//     }else{
//         console.log(employeeData[i].name , "Normal Salary")
//     }
// }

// //=============================================================================================
// // 🔹 Task 4: Login Attempts (While Loop)
// // ============================================
// // Concepts: while loop
// // 👉 Scenario:
// // User has max 3 login attempts
// // If correct password → stop loop
// // Else → keep asking
// // 👉 Output:
// // Attempt 1
// // Attempt 2
// // Login success

// let correctPassword = "1234";
// let attempts = 0;

// while (attempts < 2) {
//     let input = prompt("Enter password:");
//     attempts++;

//     console.log(`Attempt ${attempts}`);

//     if (input === correctPassword) {
//         console.log("Login success");
//         break;
//     }
// }
// if (attempts === 2) {
//     console.log("Login success");
// }
// //=============================================================================================
// // 🔹 Task 5: Coupon Generator (Generator Function)
// // ======================================================
// // Concepts: generator
// // 👉 Create offers:
// // 10% OFF
// // 20% OFF
// // Free Delivery
// // Cashback
// // 👉 Task:
// // Show one offer at a time when user clicks button (simulate with .next())

// function* offers() {
//     yield "10% OFF";
//     yield "20% OFF";
//     yield "Free Delivery";
//     yield "Cashback";
// }

// let generator = offers();

// console.log(generator.next().value);
// console.log(generator.next());
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next());

// //=============================================================================================
// // 🔹 Task 6: Shopping Cart Total (for...of)
// // ===================================================
// // Concepts: for...of
// // 👉 Input:
// // let cart = [100, 200, 300, 400]
// // 👉 Task:
// // Calculate total bill
// // Print final amount

// let cart = [100, 200, 300, 400];
// let total=0
// for ( let a of cart){
//     total = total+a
//    // console.log(total)
// }
//  console.log(total)

// //=============================================================================================
// // 🔹 Task 7: User Profile System (for...in)
// // ================================================
// // Concepts: object loop
// // 👉 Input:
// // let user = {
// //   name: "Navi",
// //   role: "Developer",
// //   location: "India"
// // }
// // 👉 Task:
// // Print:
// // name : Navi
// // role : Developer
// // location : India

//  let userData = {
//   name: "Geetha",
//   role: "Developer",
//   location: "India"
// }

// for (let data in userData){
//     console.log(data ," : ", userData[data])
// }


// //=============================================================================================
// // 🔹 Task 8: Factory Pattern (Function Reuse)
// // ====================================================
// // Concepts: return, reuse
// // 👉 Build:
// // createPhone()
// // createBattery()
// // createCharger()
// // 👉 Combine:
// // Your Order: Phone + Battery + Charger

// function createPhone() {
//   return "phone";
// }
// function createBattery() {
//   return "battery";
// }
// function createCharger() {
//   return "charger";
// }

// function createOrder() {
//     return `Your Order: ${createPhone()} + ${createBattery()} + ${createCharger()}`;
// }

// console.log(createOrder());

// //=============================================================================================
// // 🔹 Task 9: College Form with Default Values
// // ===================================================
// // Concepts: default parameters
// // 👉 If department not given:
// // Department: Not Assigned

// function collegeForm(name, department = "Not Assigned") {
//     console.log(`Name: ${name}`);
//     console.log(`Department: ${department}`);
// }

// collegeForm("Geetha");

// //=============================================================================================
// // 🔹 Task 10: Currying - EMI Calculator
// // ============================================
// // Concepts: currying
// // 👉 Structure:
// // emi(principal)(rate)(time)
// // 👉 Formula:
// // EMI = (P * R * T) / 100
// // 👉 Example:
// // emi(10000)(2)(12)

// function emi(p) {
//   return function time(t) {
//     return function rate(r) {
//         return (emi = (p * t * r) / 100);
//       };
//     };
// }

// console.log(emi(10000)(12)(2));

// //=============================================================================================
// // 🔹 Task 11: Even/Odd Analyzer
// // ======================================
// // Concepts: loop + condition
// // 👉 Print:
// // 1 → Odd
// // 2 → Even
// // ...
// // 10 → Even

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " → Even");
//     } else {
//         console.log(i + " → Odd");
//     }
// }
// //=============================================================================================
// // 🔹 Task 12: Function Scope Debugging
// // ==========================================
// // Concepts: var, let, const
// // 👉 Ask students:
// // // Why var works outside block?
// // Why let/const fails?

// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a); // ✅ works
// // console.log(b); ❌ error
// // console.log(c); ❌ error

// // Why var works outside block?
//     // var is function-scoped, NOT block-scoped.
//     // It ignores { } (blocks like if, for, while)
//     // It only respects functions
//     // So here, a is actually available outside the if block.

// // Why let/const fails?
//     // let and const are block-scoped
//     // They exist only inside { }
//     // Outside the block → they are not accessible

// //=============================================================================================
// // 🔹 Task 13: Real-Time Alert System (IIFE)
// // =================================================
// // Concepts: IIFE
// // 👉 Create:
// // Sale announcement auto runs
// // 🔥 Flash Sale: 50% OFF on Shirts

// (function autoRun(){
//     console.log(" 🔥 Flash Sale: 50% OFF on Shirts");
// }());

// //=============================================================================================
// // 🔹 Task 14: Marks Calculator with Return
// // ==============================================
// // Concepts: return
// // 👉 Input:
// // marks(80, 90, 70)
// // 👉 Output:
// // Total: 240
// // Average: 80

// function marks(a, b, c) {
//     let total = a + b + c;
//     let avg = total / 3;

//     return `Total: ${total}\nAverage: ${avg}`;
// }

// console.log(marks(80, 90, 70));
// //=============================================================================================
// // 🔹 Task 15: Retry Offer System (Generator + Condition)
// // =============================================================
// // Concepts: generator + done
// // 👉 If offers finished:
// // All offers expired

// function* offers() {
//     yield "10% OFF";
//     yield "20% OFF";
//     yield "Free Delivery";
// }

// let Generator = offers();

// let result = Generator.next();

// while (!result.done) {
//     console.log(result.value);
//     result = Generator.next();
// }

// console.log("All offers expired");