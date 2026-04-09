// // 1. User Input
// // ================

// // Name
// let name = prompt(" Enter Your Name")
// console.log(name);

// // Age
// let age = Number(prompt("Enter Your Age"))
// console.log(age);

// // Monthly Salary
// let Salary = Number(prompt("Enter Your Salary"))
// console.log(Salary);

// // Loan Amount
// let Loan = Number(prompt("Loan Required"))
// console.log(Loan);

// // =======================================================================================

// // 2. Eligibility Check
// // ======================

// // Conditions:
// // Age >= 21 AND Age <= 60
// // Salary >= 25000

// let eligibility; 

// if (age >= 21 && age <= 60 && Salary >= 25000) {
//     eligibility = "Eligible ✅";
// } else {
//     eligibility = "Not Eligible ❌";
// }

// // =======================================================================================

// // 3. EMI Calculation 
// // =======================
 
// let emi = Loan;
// emi /= 12;

// console.log("monthly EMI is: " + emi);

// // =======================================================================================

// //  4. Loan Category (If-Else)
// //  =============================
// // Loan > 5,00,000 → High Loan
// // Loan > 2,00,000 → Medium Loan
// // Else → Low Loan

// let loancategory;

// if (Loan > 500000) {
//     loancategory = "High Loan";
// } else if (Loan > 200000) {
//     loancategory = "Medium Loan";
// } else {
//     loancategory = "Low Loan";
// }


// // =======================================================================================

// // . Risk Level 
// // ================
// // If salary > 50000 → "Low Risk"
// // Else → "High Risk"

// let risklevel = (salary > 50000) ? "Low Risk" : "High Risk";
// console.log(risklevel);


// // =======================================================================================

// // 6. Customer Type 
// // ====================

// // Based on EMI:
// // EMI > 40000 → "Premium Customer"
// // EMI > 20000 → "Standard Customer"
// // Else → "Basic Customer"

// let customerType;

// switch (true) {
//     case (emi > 40000):
//         customerType = "Premium Customer";
//         break;
//     case (emi > 20000):
//         customerType = "Standard Customer";
//         break;
//     default:
//         customerType = "Basic Customer";
// }

// // =======================================================================================

// // 7. Type Conversion Check
// // ===========================

// // Print:
// // Before conversion: string
// // After conversion: number

// console.log(`
// Name : ${name}
// Age : ${age}
// Monthly Salary : ${Salary}
// Loan Amount : ${Loan}
// Eligibility Status : ${eligibility}
// EMI : ${emi}
// Loan Category : ${loancategory}
// Risk Level : ${risklevel}
// Customer Type : ${customerType}
// `);


// // =======================================================================================


