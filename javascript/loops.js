//js loops


// for 
// for in 
// for each 
// while 
// do while



// for ( ini, condition, increment/DIRECTION)  USE WHEN NUMBER OF ITERATIONS ARE KNOWN, what is iterator: keeps track of iterations
 

// for(let =1 ;)
// let sum=0;


//     for (let i = 1; i <= 10; i++) {
//   console.log(i * 2);
// }

//even numbers//odd numbers //sum of even numbers//sum of odd//sum of first 100 even numbers





// let num=Number(prompt("enter the number of which u want the table"))


// for (let i=1 ; i<=10; i++){
//     console.log(num + " x " + i + " = " + (num * i));
// }




// numbers from divisibility
// for (let i=1 ; i <=50; i++){

//     if(i%3==0 && i%5==0)
//     {console.log(i);
//     }
// }





//loop questions
//fibonacci

// let n = 10;   //length
// let a = 0, b = 1;
// console.log(a);
// console.log(b);

// for (let i = 1; i <= n; i++) {


//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c ;
// }


// console.log(b);
// console.log(a);



// keywords= break and continue

//time complexity and space complexity


// for( let i =1;i<=5;i++){
//  if(i==3){
//     continue;


//  }
//  else {
//     console.log ("checked for:");
//  }
// }



//when is while loop used


//reverse a number
// let num=123
// let reverse =0;
// while(num!=0){
//     let rem = num%10;
//     reverse= reverse*10+rem;
//     num=Math.floor(num/10);
// }

//Find the number of digits in a number using while loop



let num=Number(prompt("enter the number to check:"));
// let reverse=0;
let i=0;
let orignal= num;// assigning a varibale to variable this is to ensure that num value is stored insdie of new variable
let sum=0;

while(num!=0)
{

  let rem= num%10;
 
  reverse=reverse*10+ rem;
  sum=sum+rem;// sum of digits
     
  num=Math.floor(num/10);// what does math.floor does:

 i++;// number of digits
   // how many times the loop will run

 

console.log(sum);

console.log(reverse);
if(reverse== orignal){
    console.log("the number is palindrome");
}
else{
    console.log("not palindrome")
}


console.log("number of digits are"+ i);
}


// Find the sum of numbers from 1 to 50 using while.

// let i=1;
// let sum=0;
// while(i<=50){
//      sum=sum+i;


// }
// console.log(sum);




//fibonacci series  using for loop

// 0 1 1 2 3 5 8 13 21 34 55 89  144
// a b c
//   a b c
//     a b c
//       a b c 
//         a b c
//           a b c 
//             a b  c
//               a  b  c


// 0 1 1 2 3 5 8 13 21 34 55 89  144
                    //        c  b     a
                    //     c   b   a



// let length=Number(prompt(" enter length of fibonacci :"))
// let a=144 ;  // if we don't defined this 2 values our result will be NaN BECAUSE UNDEFINED+ UNDEFINED
// let b=89;

// console.log(a)
// console.log(b)

// for(i=length; i >=0; i--){
//     let c=(a-b);
//     console.log(c);
//     a=b;
//     b=c;

// }



//fibonacci usign while loop
// let i=1;
// let a =0;
// let b=1;
//    console.log(a);
//    console.log(b);

// while(i<=20){
//   let c = a+b;
//   console.log(c);

// a=b;
// b=c;

// i++


// }





//sytem >  transactio
//break >>>
//let current_balance=70000;


// let passward;

// login_attempts=0
// if(login_attempts<=3 && passward===1234){
//     passward  =Number(prompt("enter your passward:"));
//     console.log("try again in 20 hours");
//     login_attempts++;

// }
// else{
//login_attempts++;


// while(true){  // infinite loop
    
// let option=Number(prompt("enter the option 1. credit 2. debit 3. balance 4.exit "));
// if (option==4)
// {
//    break;
// }


//    switch(option){

//     case 1:



//     let credit_amount=Number(prompt("enter the amount you want to credit"));
//     current_balance=current_balance+credit_amount;
//     alert("your credit amount is credited"+ credit_amount)
//     break;


//     case 2:
//     let debit_amount=Number(prompt("enter the amount you want to credit"));
//     current_balance=current_balance-debit_amount;
//     alert("your debit amount is deducted"+ debit_amount)
//     break;



//     case 3:
//         alert("your current balance is"+ current_balance)

//      break;
//     case 4:
//         break;
    
     


//    }

// }


// }



// for(let i=1; i<=5;i++){
//     let output="";
//     for(let j=1; j<=i;j++){
//         output+=" " +j;
//     }
//     console.log(output);
// }




// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let output = "";
//   for (let j = i; j <= n; j++) {
//     output += j + " ";
//   }
//   console.log(output);
// }




// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let line = "";

//   // print spaces
//   for (let s = 1; s <= n - i; s++) {
//     line += "  ";
//   }

//   // print numbers
//   for (let j = 1; j <= i; j++) {
//     line += j + " ";
//   }

//   console.log(line);
// }



//  let row=5
//  for(i=1;i<=5;i++){
//     let space="";
//     for(k=1; k<=row-i ;k++)
//         {
//             space+="  ";
//     }
//     let output=" ";
//     for(j=1;j<=i;j++){
//         output=output+ " " +j ;
//     }
//     console.log(space+output)
//  }

//hoisting closures.
//DO WHILE LOOP
//number guessing game 



//square printing
// let n=8;
// //let column=Number(prompt("enter the number of columns"));
// let output;
// for(let i=1; i<=n; i++){
//   let output="";
//   for(let j=1;j<=n;j++){
//     output=output+ " *";

//   }
//   console.log(output);


// }



//    1 2 3 4 
//     2 3 4
//      3 4 
//       4


    // let row=5;
    // for(let i=1;i<=row;i++){
    //     let space=" ";
    //    for(let k=1;k<i;k++){
    //     space+=" ";
    //    }
    //     let output="";
    //     for(let j=1;j<=row;j++){
    //         output=j +" ";
    //     }
      
    //    console.log(output+space)
    // }







    //do while

  //  let user1=Number(prompt("enter the number 1 to 100"))
  //  let user2;
  //  let attempts=0;

  //   do{
  //    user2=Number(prompt("guess the number"));
  //    attempts++
  //     if(user1==user2){
  //       alert("you guessed the number")
  //       break;
  //     }
  //     else{
  //     if(user1>user2){
  //       alert("guess a larger number");


  //     }
  //     else if (user1<user2){
  //       alert("guess a smaller number");
  //      }
    

  //     }
  //   }while(user1!=user2);


  //  alert("your number of attempts are "+ attempts) ;



   // Q. do this with random number





   

























