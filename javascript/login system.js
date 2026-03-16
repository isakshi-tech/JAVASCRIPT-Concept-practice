console.log("hello");

// click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mousemove, mouseover, mouseout, and contextmenu.

// let button = document.getElementById("btn");

// button.addEventListener("click", GreetMessage);

// button.addEventListener("click", GreetMessage2);

// function GreetMessage() {
//   alert("Good morning mitron!!");
// }

// function GreetMessage2() {
//   console.log("Good night mitron!!!");
// }

let password = document.querySelector("#pass");
let LoginDiv = document.querySelector(".login");
let Details = document.querySelector(".details");
password.addEventListener("change", Login);

function Login(event) {
  let enteredPass = event.target.value;
  if (enteredPass == 1234) {
    Details.style.display = "block";
    LoginDiv.style.display = "none";

    let Salary = document.querySelector("#salary");
    Salary.addEventListener("change", checkSalary);
  }
}

function checkSalary(evt) {
  let Salary = Number(evt.target.value);
  let Button = document.createElement("button");

  if (Salary > 50000) {
    Button.innerHTML = "Bonus";
    Details.append(Button);
  }
  let info = document.createElement("h3");
  info.innerHTML = `Pankaj Your Entered Salary is ${Salary}`;
  Details.append(info);

  Button.addEventListener("click", () => {
    info.innerHTML = `Pankaj Your Entered Salary After bonus is ${(Salary += 10000)}`;
    Details.append(info);
  });
}

//mouse move event
//think about the plan >pentest,javaa,project making .

//dblclick/click
