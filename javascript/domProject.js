// do while loop

let user1_number=90;
let user2_number;78
do{
    user2_number=Number(prompt("guess the number: 1 to 200" ));
    if(user2_number>user1_number){
        alert("guess the smaller number");
    }
    if(user2_number<user1_number){
        alert("guess the larger number");
    }


}while(user1_number!==user2_number)
console.log("congratulations you have guessed the right number "+ user1_number);

// guess the Number
// 1. user1 will choose a number which is to be guessed by user2
// 2.user2 will guess the number atleast once //do while loop

// 3. user will be prompted if the number is max or min and give the prompt accordingly
// 4.when the number is guessed the loop will be exited


