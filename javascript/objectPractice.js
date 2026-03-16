// // const orders = [
// //   { orderId: 1, customer: "Amit", items: ["Burger", "Pizza"], total: 450, delivered: true },
// //   { orderId: 2, customer: "Neha", items: ["Pasta"], total: 250, delivered: false },
// //   { orderId: 3, customer: "Ravi", items: ["Burger", "Fries"], total: 300, delivered: true },
// //   { orderId: 4, customer: "Pooja", items: ["Pizza"], total: 350, delivered: true }
// // ];

// // // Q => return => totalOrders => 4

// // // Q => return => deliveredOrders => 3

// // // Q => return => PendingOrder => 1

// // // Q => return => TotalRevenue => 1150 (delivered => true)

// // // Q => TopCustomer => Amit


// // let totalOrders=orders.length
// // console.log(totalOrders)


// // const deliveredOrders = orders.filter(o => o.delivered == true).length;
// // console.log(deliveredOrders)

// // const pendingOrders = orders.filter(o => o.delivered == false).length;
// // console.log(deliveredOrders)






// // Q-Online Learning Platform

// // Each student has taken multiple tests:

// const students = [
//   { name: "Amit", scores: [80, 70, 60], active: true },
//   { name: "Neha", scores: [40, 30, 50], active: true },
//   { name: "Raj", scores: [90, 95, 88], active: false },
//   { name: "Pooja", scores: [70, 75, 72], active: true }
// ];

// // Write a function generateStudentReport(students) that:

// // Only considers active students

// // Calculates average score for each

// // Students with average ≥ 60 pass

// function generateStudentReport(students){
//   let activeStudents=students.filter((students)=>{
//     return (students.active==true)
    
   
//   })
 
// // console.log(activeStudents)
//      let passStudents=[];
//     let failedStudents=[];
//     let allAverage=[];

//   students.forEach(student=>{
//     const sum= student.scores.reduce((total,score)=>total+score,0);
//     const avg= sum/student.scores.length;
//     // console.log(avg)
//     allAverage.push(avg)
  
//     // let passStudents=[];
//     // let failedStudents=[];
//     if(avg>=60){
//       passStudents.push(student.name)


//     }
//     else {
//       failedStudents.push(student.name)
//     }
    
//   })
//   const CalAvg=(allAverage.reduce((t ,a)=>t +a,0)/allAverage.length)

// // console.log(passStudents)
// // console.log(failedStudents)
 
// let output= {
//   totalActiveStudents:activeStudents.length ,
//   passStudents: passStudents,
//   failedStudents: failedStudents,
//   classAverage: CalAvg
// }
// return output


//   }

//    console.log(generateStudentReport(students));
  










// output:
// {
//   totalActiveStudents: 3,
//   passedStudents: ["Amit", "Pooja"],
//   failedStudents: ["Neha"],
//   classAverage: 68.5
// }

// ==========================================================================




// Q-E-Commerce Discount Engine

// An e-commerce site stores cart data:

// const cart = [
//   { name: "Laptop", price: 50000, quantity: 1, category: "electronics" },
//   { name: "Shirt", price: 2000, quantity: 2, category: "fashion" },
//   { name: "Headphones", price: 3000, quantity: 1, category: "electronics" }
// ];





// // Rules:

// // Electronics → 10% discount

// // Fashion → 20% discount

// // If final cart value > 60000 → extra 5% discount

// // Write calculateFinalBill(cart) that returns:

// function calculateFinalBill(cart){

//  let TotalDiscount=0
// //   cart.map((i)=>{
// //     if(i.category=="electronics"){
// //       discount=(price/10)*100

// //     }
// //     else if(i.category=="fashion"){
// //       discount=(price/20)*100
// //     }

// //   }
// // )

// let totalBeforeDiscount=0;
// let discount;
// let finalcart = 0;
// let finalBill;
// for(i in cart){
//    totalBeforeDiscount+=(cart[i].price *cart[i].quantity)
//    if(cart[i].category=="electronics"){
//       discount=(cart[i].price *cart[i].quantity)*0.10

//     }
//     else if(cart[i].category=="fashion"){
//       discount=(cart[i].price*cart[i].quantity)*0.20
//     }

//   TotalDiscount+=discount
 

    
//   }
//  finalcart=totalBeforeDiscount-TotalDiscount;

// if(finalcart>60000){

//  finalBill= finalcart -(finalcart*0.05)
//             //finalcart*0.95

// }
// else{
//   finalBill=finalcart
  
// }


// let output =
//   {
//   totalBeforeDiscount:totalBeforeDiscount ,
//   totalDiscount:TotalDiscount,
//   finalAmount: finalBill
// }
// return output
//   }


// console.log(calculateFinalBill(cart));


// {
//   totalBeforeDiscount: 57000,
//   totalDiscount: 8500,
//   finalAmount: 48500
// }







// =========================================================================

// Q-Bank Account Fraud Detector

// Bank transactions:

// const transactions = [
//   { user: "Amit", amount: 5000, type: "debit" },
//   { user: "Amit", amount: 3000, type: "debit" },
//   { user: "Neha", amount: 20000, type: "debit" },
//   { user: "Amit", amount: 10000, type: "credit" },
//   { user: "Neha", amount: 5000, type: "credit" }
// ];


// Fraud Rule:
// If total debit of a user > 2 × total credit → mark as Fraud

// Write detectFraud(transactions) that returns:

// ["Neha"]






























// // ======================================================================

// // Q-Movie Ticket Booking System

// // Bookings:

// const bookings = [
//   { user: "Amit", seats: 3, price: 200 },//0600
//   { user: "Neha", seats: 6, price: 180 },//1080
//   { user: "Raj", seats: 2, price: 200 },//400
//   { user: "Pooja", seats: 8, price: 150 }//120
// ];

// // Rules:

// // If seats ≥ 5 → 10% discount

// // If total bill > 1000 → extra 5% discount

// // Write calculateTheatreRevenue(bookings) returning:


// function calculateTheatreRevenue(bookings){
//   let totalRevenue=0
//   let discount=0;
//   let maxbill=0;
//   highpayingcustomer=""
//   // let currentHighpaying;
//   for(let i in bookings){
//     billBeforeDiscount=(bookings[i].price*bookings[i].seats)
    
//     // if(billBeforeDiscount>currentHighpaying){
//     //   currentHighpaying=bookings[i].user


//     // }
   
 
//     if(bookings[i].seats >=5){
//       discount+=(bookings[i].price*bookings[i].seats)*0.10

//     }
   
//     if(billBeforeDiscount>1000){
//       discount+=(billBeforeDiscount*0.05)

//     }
//     if(billBeforeDiscount>maxbill){
//       maxbill=billBeforeDiscount;
//       highpayingcustomer=bookings[i].user
//     }


  
//     totalRevenue+=billBeforeDiscount-discount
  
//   }
  
// return {
//   totalRevenue: totalRevenue,
//   highpayingCustomer: highpayingcustomer,
// }
// }


// console.log(calculateTheatreRevenue(bookings)
// )
    





// =========================================================================

// Q-Company Payroll & Bonus System






// Employees:

const employees = [
  { name: "Amit", department: "IT", salary: 50000, rating: 4 },
  { name: "Neha", department: "HR", salary: 40000, rating: 3 },
  { name: "Raj", department: "IT", salary: 70000, rating: 5 },
  { name: "Pooja", department: "Finance", salary: 60000, rating: 2 }
];

// Rules:

// Rating ≥ 4 → 20% bonus

// Rating = 3 → 10% 

// Below 3 → no bonus

// Write generatePayroll(employees) that returns:


// {
//   totalSalaryPayout: 236000,
//   highestPaidEmployee: "Raj",
//   departmentWisePayout: {
//     IT: 144000,
//     HR: 44000,
//     Finance: 60000
//   }
// }



// let bonus=0
// for(let i in employees){
//   if(employees[i].rating>=4){
//     bonus+=
//   }
// }

console.log("Q5");

// const employees = [
//   { name: "Amit", department: "IT", salary: 50000, rating: 4 },
//   { name: "Neha", department: "HR", salary: 40000, rating: 3 },
//   { name: "Raj", department: "IT", salary: 70000, rating: 5 },
//   { name: "Pooja", department: "Finance", salary: 60000, rating: 2 }
// ];

function generatePayroll(employees) {
  let Result = {}
  let totalSalaryPayout = 0;
  let max = 0;
  let departmentWiseSalary = {};

  for (const employee of employees) {
    if(employee.rating >= 4){
      totalSalaryPayout += (employee.salary + (employee.salary * 0.2));
    }else if(employee.rating >= 3){
      totalSalaryPayout += (employee.salary + (employee.salary * 0.1));
    }else{
      totalSalaryPayout += employee.salary;
    }
    // Find the maximum salary
    if (employee.salary > max) {
      max = employee.salary;
    }
    // department wise salary
    if (!departmentWiseSalary[employee.department]) {
      departmentWiseSalary[employee.department] = 0;
    }
     if(employee.rating >= 4){
      departmentWiseSalary[employee.department] += (employee.salary + (employee.salary * 0.2));
    }else if(employee.rating >= 3){
      departmentWiseSalary[employee.department] += (employee.salary + (employee.salary * 0.1));
    }else{
      departmentWiseSalary[employee.department] += employee.salary;
    }
  }
  for(const employee of employees){
    if(employee.salary === max){
      Result.highestPaidEmployee = employee.name;
      break;
    }
  }
  Result.departmentWiseSalary = departmentWiseSalary;
  Result.totalSalaryPayout = totalSalaryPayout;
  return Result;
}

console.log(generatePayroll(employees));


