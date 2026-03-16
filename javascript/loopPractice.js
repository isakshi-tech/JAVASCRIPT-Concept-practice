//PATTERN PRIN

//     }
// console.log(output)    
// }

//2
// let n=4;
// let output=""

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=iTING

//=================NORMAL LEFT SIDE TRAINGLE ===============================
//1
// let n=Number(prompt("enter the number:"));


// for(let i=1;i<=n;i++){
//     let output=""
//     for(let j=1;j<=i;j++){
//         output+= j + " ";j++){
//         output+=j + " "
//     }
//     output+="\n";

// }

// console.log(output)


//=============================left inverted traingle======================================
// let n =6
// for(let i=n; i>=1;i--){
//     let output="";
//     for(let j=i;j>=1;j--){
//         output+= j+ " "
//     }
//     console.log(output)
// }


//=============================LEFT HALF PYRAMID


// let n=6
// for(let i=1;i<=n;i++){
//     let spaces=""
//     for(let k=1;k<=n-i;k++){
//         spaces+=" "
//     }
//     let output=""
//     for(let j=1;j<=i;j++){
//         output+= j 
//     }
//     console.log(spaces+output)
// }


//ARROW PATTERN
// let n=5
// for(let i =1;i<=(2*n)-1;i++){
//    let output=""
//     if(i<=n){
//         for(let j=1;j<=i;j++){
//             output+= "*"
//         }
//     }
//     else{
//         for(let j=1;j<=2*n-i;j++){
//             output+="*"
//         }
//     }
//      console.log(output)
// }


//diamond pattern
// let n=10
// for(let i=1;i<=2*n-1;i++){
//  if(i%2!=0){
//     let spaces=""
//     let output=""

//      if(i<=n) {   
       
//          for(let k=1;k<=n-i ;k++)
//           spaces+=" "
     
//           for(let j=1;j<=i;j++)
//           output+="*"
//        }
//        else if (i>=n){
       
//         for(let k=1;k<=(i-n) ;k++)//(i-n)2*n - i
//             spaces+=" "
//         for(let j=1;j<=2*n-i;j++)
//             output+="*"
//        }
//  console.log(spaces+output)      

// }
// }

//if i want to print nth row twice while inverting?/
//butterfly
// let n=4
// for(i=1;i<=2*n-1;i++){//2*n-1
//   let output=""
//   let spaces=""
//   if(i<=n){
//      for(let j=1;j<=i;j++){
//     output+="*"
//   }
  
//   for(let k=1;k<=2*n-2*i;k++){
//     spaces+=" "
//   }
//   }
//   else{
//     for( let j=1;j<=2*n-i;j++){
//       output+="*"

//     }
//     for(let k=1;k<=i*2 -2*n;k++){
//       spaces+=" "
//     }
    
    
//   }

// console.log(output+spaces+output)
// }

// let n=4
// for(let i=1;i<=n;i++){
//   let space=""
//   for(let k=1;k<=n-i;k++){
//     space+=" "
//   }
//   let output=""
//   for(let j=1;j<=i;j++){
//    output+=j + " "
  
//   }
// console.log(space+output)


// }


// let n=4
// let count=1;
// for(let i=1;i<=n;i++){
//   let output=""
 
//   for(let j=1;j<=i;j++){
//     output+=count + " "
//       count++
//   }
 
//   console.log(output)
// }



   


//  let n=4
// for(let i=1;i<=n;i++){
//   let space=""
//   for(let k=1;k<=n-i;k++){
//     space+=" "
//   }
//   let output=""
//   for(let j=1;j<=i;j++){
//    output+=j + " "
  
//   }
// console.log(space+output)










// let n=4
// for(let i=1;i<=2*n ;i++){
//   let output=""
//   if(i<=n){
//       for(let j=i;j<=n;j++){
//     output+="* "

//   }
//   }
//   else{
//     for(let j=1;j<i-(n-1);j++){
//       output+="* "
//     }
//   }
// console.log(output)


// // }
// let n=5
// for(let i=1;i<=n;i++){
//   let output=""
//   let spaces=""
//   for(let k=1;k<=i;k++){
//     spaces+=" "
//   }
//   for(j=i;j<=n;j++){
//     output+= " "+ "*"
//   }
//   console.log(spaces+output)
// }

// let n =4
// for(let i=1;i<=2*n-1;i++){
//   let output=""
//   let space=""
//   if(i<=n){
//     for(let k=1;k<=i;k++){
//       space+=" "}
//     for(j=i;j<=n;j++){
//       if(i==1||j==i||j==n){
//         output+= " "+ "*"
//       }
//     else{output+= "  "}
      
//   }
// }
//   else{
//     for(let j=2*n-i;j<=n;j++){
//       if(i==2*n-1||j==2*n-i||j==n){
//  output+=" "+ "*"
//       }
//       else{output+= "  "}
     

//     }
//     for(let k=1;k<=2*n-i;k++){
//       space+=" "
//     }

//   }
//   console.log(space+output)
// }


// let n=5
// for(let i=1;i<=n;i++){
//   let output=""
//   let spaces=""
//   for(let k=1;k<=n-i;k++){
//     spaces+=" "
//   }
//   for(let j=1;j<=i;j++){
//     if(i==1||i==n||j==1||j==i){ output+="* "}
//     else{output+= "  "}
//   }

//   console.log(spaces+output)
//   // console.log(output+spaces)
// }


// let n=5;
// for(let i=1;i<=n;i++){
//   let output=""
//   let spaces=""
//   for(let k=1;k<=i;k++){
//     spaces+=" "
//   }
//   for(let j=1;j<=n;j++){
//     if(i==1||i==n||j==1||j==n){
//       output+= "* "
//     }
//     else{
//       output+="  "
//     }
//   }
//   console.log(spaces+output)
// }

// let n=5
// for(let i =1;i<=(2*n)-1;i++){
//    let output=""
//     if(i<=n){
//         for(let j=1;j<=i;j++){
//             output+= "* "
//         }
//     }
//     else{
//         for(let j=1;j<=2*n-i;j++){
//             output+="* "
//         }
//     }
//      console.log(output)
// }



// let n=5
// for(let i=1;i<=n;i++){
//   let output=""
//   for(let j=1;j<=n-i;j++){
//     output+=j+ " "
//   }
//   console.log(output)
// }








  











