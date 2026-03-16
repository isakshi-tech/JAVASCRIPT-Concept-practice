//datatypes
//number,string,boolenan, undefined, null,object.


// let order= prompt("Enter your order amount");

// if(order>=200){
//     console.log("your order is eligible for free delivery");
// }
// else{
//     console.log(" 90 rupees delivery");
//     order+90;
// }


// let user= prompt("login");// prompt box always takes string
// let loginAttempt=0;
// if(user === "1234" && loginAttempt<3){
//     console.log("welcome back user");
//     // loginAttempt=+1;


// }
// else{
//     console.log("login failed")
//     console.log("failed attempts");
//       loginAttempt=+1;
// }


// let tenth=89;
// let twelth=68;

// let college=8;
// let exam ="PASS";

// if ()




// let experience=prompt("enter your experience"  );
// let rating= prompt("enter your rating"  );
// let salary= prompt("enter your salary"  );
// if(experience>=2){
//     if(rating>=4){
//         salary+=10000;
//         console.log("your new salary is " + salary);

//     }
//     else{
//         console.log("your rating is low");
//     }
// }
// else{
//     console.log("need more expereience");
// }




//loan eligibilty
// let empSalary=prompt("enter your salary"  );
// let creditScore= prompt("enter your score"  );

// if(empSalary>25000){
//     if(creditScore>=750){
        
//         console.log("you are eligible for loan");

//     }
//     else{
//         console.log("you are not eligible for loan due to low credit score");
//     }
// }
// else{
//     console.log("your salary is low");
// }




//find greatest of three
// let num1=5;
// let num2=10;
// let num3=7;

// if(num1>=num2 && num1>=num3){
//     console.log(num1 + " is greatest");
// }
// else if(num2>=num1 && num2>=num3){
//     console.log(num2 + " is greatest");
// }
// else{
//     console.log(num3 + " is greatest");
// }




// let grade=85;
// if(grade>90  && grade<=100){
//     console.log("A grade");}
// else if(grade>80 && grade<=90){
//     console.log("B grade");
// }
// else if(grade>70 && grade<=80 ){
//     console.log("C grade");

// }
// else if (grade>60){
//     console.log("D grade");
// }

// else{
//     console.log("Fail");
// }


// let grade=85;

// if(grade<=100 && grade>90){
//     console.log("A grade");}
//  if(grade<=90 && grade>=80){
//     console.log("B grade");
// }
// if(grade<=80 && grade>70){
//     console.log("C grade");     
// }
//  if (grade<=70 && grade>60){
//     console.log("D grade");
// }
// if ( grade<=60){
//     console.log("Fail");
// }


// let unit=prompt("enter the unit consumed"  );
// let bill;

// if(unit>=1 && unit<=100){
//     bill=unit*1;              // bill for first 100 would be 100

// }
// else if (unit>100 && unit<=200){
//     bill= (unit-100)*2 + 100;
//     console.log(`your bill is ${bill}`);
// }
// else if (unit>200 && unit<=300){
//     bill= (unit-200)*3 + 300;
//     console.log(`your bill is ${bill}`);

// }

// else if (unit>300 && unit<=400){
//     bill=(unit-300)*4 + 600;
//     console.log(`your bill is ${bill}`);

// }

// else{
//     bill=(unit)*5;
//     console.log(`your bill is ${bill}`);
// }



// bus fare =50 by default
// betweeen 1 to 5 = 10 rupees per kilometer 
// more then 5km =8rupees per kilometer
//if it is night time = bill +20%


// let bus_fare=50;
// let distance_covered= prompt("enter distance covered in km"  );
// let time_of_travel= prompt("enter time of travel day or night"  ).toLowerCase();
// let bill;
// let time=prompt("enter time ");


// if( time<=4 && time>=20){
//     bus_fare=100;

// }
//  if (time_of_travel==="night"){

//         bill+=bill*0.2
//         console.log(`your total bus fare is ${bill}`); } 


// if( distance_covered<=5) {
//     bus_fare+= distance_covered *10;
//     bill=bus_fare;

  

//     console.log(`your total bus fare is ${bill}`);
//       }

// else if (distance_covered>5){
//      bus_fare+= distance_covered *8;
//      bill=bus_fare;
   
//  console.log(`your total bus fare is ${bill}`);
    
// }



//==================================================================================================================================

// let Day_no=7;

// switch(Day_no)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//     case 7:
  
//         console.log("weekend");
//         break;
// }

//===========================================================================================================================


// let atm= prompt(" Enter atm option: 1-debit , 2-credit , 3 -balance" );

// switch(atm){
//    case 'debit':
//     console.log("debit option selected");
//     let amount= prompt("Enter amount to withdraw");
//     balance=balance- amount;
//     console.log("your remaining balance is " + balance);
//     break;

//     case 'credit':
//     console.log("credit option selected");
//     let credit_amount= prompt("Enter amount to credit");
//     balance=balance+ credit_amount;
//     console.log("your new balance is " + balance);
//     break;

// }



















