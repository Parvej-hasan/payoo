document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("Cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Number Faa!!");
    return;
  }
  const cashoutAmount = getValueFromInput("Cashout-amount");
  const currentBalance=getBalance();
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("invalid Amount Faaa!");
    return;
  }
  const pin = getValueFromInput("Cashout-pin");
  if (pin === "1234") {
    alert("Cashout Succesfully");
    setBalance(newBalance)
 
  } else {
    alert("Invalid Pin Faa!!");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click",function(){
//     //get the agent number & validate
//     const cashoutNumberInput=document.getElementById("Cashout-number");
//     const cashoutNumber = cashoutNumberInput.value ;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length!=11)
//     {
//         alert("Invalid Agent Number Faaa!")
//         return;
//     }
//     //get the amount, validate, convert to Number
//     const cashoutAmountInput=document.getElementById("Cashout-amount");
//     const cashoutAmount=cashoutAmountInput.value;
//     console.log(cashoutAmount)

//     //get the current blance, validate, convert to Number
//     const balanceElement=document.getElementById("balance");
//     const balance=balanceElement.innerText;
//     console.log(balance);
//     // calculate new balance
//     const newBalance=Number(balance)-Number(cashoutAmount);
//     if(newBalance<0)
//     {
//         alert("Invalid Amount");
//         return;
//     }
//     console.log( " New-Banlance",newBalance);

//     // get the pin and verify
//     const cashoutPinInput=document.getElementById("Cashout-pin");
//     const pin=cashoutPinInput.value;
//     if(pin=="1234")
//     {
//         alert("Cashout Succesfull");
//         console.log("newBalance",newBalance)
//         balanceElement.innerText=newBalance;
//     }
//     else
//     {
//         alert("Faaaa!!!!");
//     }
//     // ture show an alert >set balance
//     // ture show an error alart >return
//     //

// });
