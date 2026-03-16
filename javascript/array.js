console.log("ARRAY")
// let StudentList=["sakshi","shruti", "pranav", "sakshi","shivtej"];

// console.log(StudentList[0])

// let studentInfo=["Shivtej",22,true,"sakshi"]

// console.log(studentInfo);


//key=10
// const arr=[12,11,2,8,3,16,4]
// console.log(arr)
// let flag=false
// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i])
//     if (arr[i]==10){
//         console.log("key found at index"+ i)
//         flag=true
//     }

// }

// if(flag==false){
//         console.log("key is not found in the array")
//     }

////////////////////////////////////SUM////////////////////
// const arr=[12,11,2,8,3,16,4]
// console.log(arr)
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];

    
//     }

//  console.log(sum)   


//  let Names=["pankaj","akash","yash","virat"]
//  for(let i=0;i<Names.length;i++){
//     Names[i]=Names[i].toUpperCase();
    
//  }

//  console.log(Names)




//  let attendance=["p","a", "p","p","a"]
//  let p=0;
//  for(let i=0;i<attendance.length;i++){
    
//     if(attendance[i]=="p"){
//         p++

//     }

//  }
//  console.log(p)
//  let percentage= (p/attendance.length)*100
//  console.log(percentage)

 
// let Elements=[12,50,30,31,22,90]
// for(i=0;i<Elements.length;i++){
//     let max=Elements[0]
     
//     // if(Elements[i]>Elements[i-1]){
//     //     max=Elements[i]
//     // }
//     // if(Elements[i]<Elements[i-1]){
//     //     min=Elements[i]
//     // }
//     if(max<Elements[i]){
//         max=Elements[i];
//     }
// }

// console.log(max)
// let min=Elements[0];

// let Elements=[12,50,30,31,22,90]
// let min=Elements[0];
// for(i=0;i<Elements.length;i++){
    
     
    
//     if(min>Elements[i]){
//         min=Elements[i];
//     }
// }
// console.log(min)


// let Duplicates=[2,4,5,7,4]
//    for(let i=0;i<Duplicates.length;i++){
//         for(let j=i+1;j<Duplicates.length;j++){
//             if(Duplicates[i]==Duplicates[j]){
//                 console.log("the value is duplicate "  + Duplicates[i]);

//             }
//         }
// }




// let stock=[10,0,5,0,8]
// let newStock=[]
// for(let i=0;i<stock.length;i++){
//     if(stock[i]!==0){
//         newStock.push(stock[i])
//     }
// }

// console.log(newStock)



// let inventory=["TV","COMPUTER","LAPTOP","PHONE","SMART WATCH"]
// let CustomerOrder="TV";
// if(inventory.includes(CustomerOrder)){
//     console.log("your order is ready " + CustomerOrder)
// }
// else{
//     console.log("not in stock")
// }


// let wishlist=["miso paste","noodles","mayonaise","peri peri spice"]
// let grocerry="pasta"

//     if(wishlist.includes(grocerry)){
//        console.log(grocerry + "it exists")
//     }
//     else{
//           console.log(wishlist.push(grocerry))
//     }


// let arr=[9,7,8,90,98,73,74,23]
// for(let i=1;i<j;i++){
//       for(let j=arr.length-1;j<=i;j--)
            

// }
// let i=0
// let j=arr.length-1
// while(i<j){
//       let temp= arr[i]
//       arr[i]=arr[j]
//       arr[j]=temp

// i++
// j--

// }
// console.log(arr)


// for(let i=0;i<arr.length-1;i++){
//       for(let j=i;j<arr.length-1-i;j++){

//  if (arr[j] >arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       }
// }
// }
// console.log(arr);



//filter,map,reduce

//map

// let salaries=[10000,30000,20000,50000]
// let hike=salaries.map((element)=>{
//       return (element*10/100) +element;

// })
// console.log(hike)


// let fruites=["apple","banana","litchi","kiwi"]
// let fruit=fruites.map((element)=>{
//       return element.length
// })

// console.log(fruit)

//filter
// let marks=[50,28,75,10,65]
// let output=marks.filter((sakshi)=>{
//       return sakshi>30
// })
// console.log(output)



// let names=["saki","shiv","cutie","honey","doremon"]
// // let validatedNames=names.filter((friends)=>{
// //       // let length= friends.length
// //       return friends.length>4



// // })

// // console.log(validatedNames)

// function sample(arr){
//       return arr.map((name)=>{
//             return name.toUpperCase()
//       })

// }
// console.log(sample(names));






let marks=[50,28,75,10,65]


let output=marks.reduce((max,current)=>{
      if(current>max){
            max=current;
      }
      return max
}, marks[0]);

console.log(output)






      




    






//reduce
let arr=[10,50,15,60,5]
let average=arr.reduce((acc,current)=>{
      acc=acc+current;
      // let totalSum=acc
      // let taverage=totalSum/arr.length
      
      // return taverage
      return acc
    
},0)/arr.length


// let average=acc/arr.length
console.log(average)

//java
//oops concepts>>> main concept

//signature of function



//primitive data types and non primitive data type














