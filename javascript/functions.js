// console.log("functions")
// function bonus(salary){//Value

//  salary+=1000
//  return
// }


// let salary=10000;
// bonus(salary)
// console.log(salary)


//pass by value and pass by reference
//execution allocation

//hoisting-->interview


//temporal deadzone> let constant




// for(let n=1;n<=50;n++){
//     if (isprime(n)){
//         console.log(n)
//     }
// }

// // let n=7

//     function isprime(n){
        
       
//         for(let i=2; i < n;i++){
//             if(n%i==0){
//                 return false;
//             }
//             // else{
//             //     return true;
//             // }
//         }

//     return true;
//     }
// let n= 6789
// let i=0;
// while(n!=0){
//     // rem=n%10;
    
//      n=Math.floor(n/10)

//     i++;
//     // n=Math.floor(n/10)
// }

// console.log(i)



// //ATM SYSTEM> done



// let count=0
// function countDigits(num){
// // write the code for armstrong using function?? without help
// while(num!=0){
//     num=num/10;
//     count++
// }
// return count
// }

// let sum=0
// function isarmstrong(num,power){

//     while(num!=0){
//     let rem=num%10;
//     sum=sum+rem**power
//     num=Math.floor(num/10)
// }
//  return sum   
    

// }





//function
// closures>return function
// parameters
// higher order function 
//function aray 
//object




//Arrow functions






//truthy and falsy values>>o,undefined,null,nan, empty string

//explain recursion to yourself >> for factorial








    //CALLBACK FUNCTION





// function paymentSucess(msg)  {
//     console.log(msg)
// }  

// function paymentFailure(msg){
// console.log(msg);
// }

// function PaytmKaro(amount, onSucess,onFailure){
//    if(amount>0){
//      onSucess("payment sucess")
//    }
//    else{
//     onFailure("payment failed")
//    }

// }
// PaytmKaro(500,paymentSucess,paymentFailure)









//scope chaining


//closures







//passward strength calculator.

// let password=prompt("enter your password");

// function hasUppercase(password){
    
//     for(i=0;i<password.length;i++){
//         let ch=password[i]
//         if(ch>='A' && ch<='Z'){
//             return true;
        
//         }
    
//     }
//       return false;  

// }
// function hasLowercase(password){
//     for(i=0;i<password.length;i++){
//         let ch=password[i]
//         if(ch>='a' && ch<='z' ){
//             return true;
        
//         }
//     //   return false;  
//     }
//       return false;  


// }
// function hasdigit(password){
// for(i=0;i<password.length;i++){
//         let ch=password[i]
//         if(ch>=0 && ch<=9){
//             return true;
        
//         }
//     //   return false;  
//     }
//       return false;  
// }


// let uppercase=hasUppercase(password)
// let lowercase=hasLowercase(password)
// let hasAdigit=hasdigit(password)
// if(uppercase && lowercase && hasAdigit) {
//     alert("your passward strength is:STRONG")
// }
// else if(uppercase && hasAdigit){
//     alert("your password strength is :MEDIUM")
// }
// else {
//     alert("your password strenght is : WEAK")
// }






// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// const calcAverage=(score1,score2,score3)=> (score1+score2+score3)/3
// const scoreDolphines=calcAverage(44,23,71);
// console.log(scoreDolphines)
// const scoreKoalas=calcAverage(65,54,49);
// console.log(scoreKoalas)
// // const scoreDolphines=calcAverage(85,54,41);
// // console.log(scoreDolphines)
// // const scoreKoalas=calcAverage(23,34,27);
// // console.log(scoreKoalas)


// function CheckWinner(average1,average2){
//     if(average1>=2*average2){
//         return `Team with average ${average1} won`
//     }
//     else if(average2>=2*average1){
//         return `Team with average ${average2} won`
//     }
//     else{
//         return `no teams win`
//     }
// }
// console.log(CheckWinner(scoreDolphines,scoreKoalas))
// let num=Number(prompt("enter the number"))
// function isprime(num){
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// function recursive(num){
//     if(num==0){
//         return 1
//     }

//     return recursive(num-1)*num
// }
// console.log(recursive(6));


// function countdown(num){
//     if (num==1){
//         return 1

//     }
//     console.log(num)
//     return countdown(num-1) 

// }
// console.log(countdown(50))


// 0 1 1 2 3 5 8 13 21 34 55 89 144
// 0 1 2 3 4 5 6 7 8   9 10  11 12 13

function fib(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return fib(n-1)+fib(n-2)

}
console.log(fib(1))