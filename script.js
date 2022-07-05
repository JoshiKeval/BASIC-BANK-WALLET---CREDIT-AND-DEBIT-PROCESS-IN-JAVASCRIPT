let total = 0;
const deposits = []; //deposit array for stor our credit transactions
const withdraw = []; //withdraw array for stor our debit transactions

//credit function
let credit = document
  .getElementById("creditButton")
  .addEventListener("click", () => {
    let creditInput = document.getElementById("creditAmount");
    let creditAmount = parseFloat(creditInput.value);
    //validation process
    if (creditAmount < 0) {
      alert("NEGITIVE NUMBER IS NOT ALLOWED.PLEASE ENTER VALID NUMBER..");
    } else if (isNaN(creditAmount)) {
      alert("CHARACTER IS NOT ALLOWED.PLEASE ENTER VALID NUMBER..");
    } else {
      deposits.push(creditAmount);
      total += Number(creditAmount);

      let totalBalance = document.getElementById("totalAmount");
      totalBalance.innerText = total;
    }
  });

//debit function
let debit = document
  .getElementById("debitButton")
  .addEventListener("click", () => {
    let debitInput = document.getElementById("debitAmount");
    let debitAmount = parseFloat(debitInput.value);

    //validation process
    if (debitAmount < 0) {
      alert("NEGITIVE NUMBER IS NOT ALLOWED.PLEASE ENTER VALID NUMBER..");
    } else if (isNaN(debitAmount)) {
      alert("CHARACTER IS NOT ALLOWED.PLEASE ENTER VALID NUMBER..");
    } else if (debitAmount > total) {
      alert("YOUR ACCOUNT DOSEN'T HAVE SUFFICIENT BALANCE");
    } else {
      withdraw.push(debitAmount);
      total -= Number(debitAmount);

      let totalBalance = document.getElementById("totalAmount");
      totalBalance.innerText = total;
    }
  });
