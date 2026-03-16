
//Atm system 

let isLoggedIn = true;
let balance = 200000;


function checkLogin() {
  if (!isLoggedIn) {
    alert(" Please login first");
    return false;
  }
  return true;
}


function emiOption(amount) {
  let interestRate = 12;
  let months = 6;

  let interest = (amount * interestRate) / 100;
  let total = amount + interest;
  let emi = total / months;

  alert(`
    EMI Details 
    Interest: + ${interest} 
    Total Payable: ${total}
    `
  );
}


function atmMenu() {
  if (!checkLogin()) return;

let choice = prompt(`
ATM MENU
1. Check Balance
2. Withdraw
3. Transaction
4. Apply for Loan
5. Exit

Enter your choice:
`);

  switch (choice) {

    case "1":
      alert("Your balance is: " + balance);
      break;

    case "2":
      let withdrawAmount = Number(prompt("Enter withdrawal amount:"));
      if (withdrawAmount > balance) {
        alert("Insufficient balance");
      } else {
        balance -= withdrawAmount;
        alert(`Withdraw successful
           Remaining balance: ${balance}`);
      }
      break;

    case "3":
      let transAmount = Number(prompt("Enter transaction amount:"));

      if (transAmount > balance) {
        alert(" Transaction failed: insufficient balance");
      } else {
        balance -= transAmount;
        alert(`Transaction successful 
          Remaining balance:${balance}`);

        // EMI condition
        if (transAmount > 500) {
          let emiChoice = prompt("Do you want EMI? (yes/no)");
          if (emiChoice === "yes") {
            emiOption(transAmount);
          }
        }
      }
      break;

    case "4":
      if ( balance >= 40000) {
        alert("You are eligible for a loan");
          let loanAmount = balance * 0.9;
      alert(
        `Fixed Deposit via Loan
        Loan Amount (90% of balance):${loanAmount}`
      );

      } else {
        alert("Not eligible for loan");
      }
  case "5":
      alert(" Thank you for using ATM");
      break;

    default:
      alert("Invalid choice");
  }

 
  atmMenu();
}

atmMenu();
