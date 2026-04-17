// // Task 1: Order System (setTimeout)
// // 👉 Simulate a food order system
// // Requirement:
// // Print: "Order placed"
// // After 2 sec → "Preparing food"
// // After 4 sec → "Food ready"
// // After 5 sec → "Delivered"
// // 👉 Use only setTimeout

// console.log("Order placed");

// setTimeout(() => {
//   console.log("Preparing food");
// }, 2000);

// setTimeout(() => {
//   console.log("Food ready");
// }, 4000);

// setTimeout(() => {
//   console.log("Delivered");
// }, 5000);

// //==============================================================================================================================
  
// // 🔹 Task 2: Digital Clock (setInterval)
// // 👉 Build a live clock
// // Requirement:
// // Print current time every second
// // Stop after 10 seconds
// // 💡 Use:
// // setInterval
// // clearInterval


// let count = 0;

// let clock = setInterval(() => {
//   let time = new Date();
//   console.log(time.toLocaleTimeString());

//   count++;

//   if (count === 10) {
//     clearInterval(clock);
//     console.log("Clock stopped");
//   }
// }, 1000);


// //==============================================================================================================================
 
// // ⚔️ LEVEL 2 — Intermediate (Callbacks + Async Thinking)
// // 🔹 Task 3: Callback Hell Simulation
// // 👉 Create 3 functions:
// // loginUser
// // getUserData
// // getUserPosts
// // Flow:
// // login → getUserData → getUserPosts
// // 👉 Each should use setTimeout
// // ⚠️ Expected Output Order:
// // User Logged In
// // User Data Fetched
// // User Posts Fetched

// function loginUser(callback) {
//   setTimeout(() => {
//     console.log("User Logged In");
//     callback();
//   }, 1000);
// }

// function getUserData(callback) {
//   setTimeout(() => {
//     console.log("User Data Fetched");
//     callback();
//   }, 1000);
// }

// function getUserPosts() {
//   setTimeout(() => {
//     console.log("User Posts Fetched");
//   }, 1000);
// }

// loginUser(() => {
//   getUserData(() => {
//     getUserPosts();
//     });
//   });

// //==============================================================================================================================
 
// // 🚀 LEVEL 3 — Promises (Real API Logic)
// // 🔹 Task 4: Fake API Promise
// // 👉 Create your own Promise function
// // function getProducts() {
// //   // return promise
// // }
// // Conditions:
// // After 2 sec → resolve with product array
// // If error → reject with "API Failed"
// // 👉 Use:
// // .then()
// // .catch()
// // .finally()


// function getProducts() {
//   return new Promise((resolve, reject) => {
//     let success = true;
//     setTimeout(() => {

//       if (success) {
//         resolve([
//           { id: 0, name: "Shirt" },
//           { id: 2, name: "Shoes" },
//           { id: 3, name: "Watch" }
//         ]);
//       } else {
//         reject("API Failed");
//       }
//     }, 2000);
//   });
// }

// getProducts()
//   .then((data) => {
//     console.log("Products:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Request Completed");
//   });