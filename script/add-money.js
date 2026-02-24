document.getElementById("add-money-btn").addEventListener("click", function () {
  //bank-account
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("please select a bank");
    return;
  }

  //   get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid Ac No");
    return;
  }
  //  get ammount
  const ammount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(ammount);
  console.log(newBalance);

  // get pin
  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`add money success from ${bankAccount} 
        at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid Pin Faa!");
    return;
  }
});
