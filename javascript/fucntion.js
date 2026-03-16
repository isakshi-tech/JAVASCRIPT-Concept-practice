function greet(name){
    console.log("good morning "+ name)

}

function Runafter5seconds(greet){
    setTimeout(()=>{
       
        greet("sakshi");
    },6000)
}
Runafter5seconds(greet);



console.log("Start");

setTimeout(() => {
  console.log("After 3 seconds");
  console.log("End");
}, 3000);


