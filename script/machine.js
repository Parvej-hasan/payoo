
console.log("machine Add");

function getValueFromInput(id)
{
    const input = document.getElementById(id);
    const value =input.value;
    console.log(value);
    return value;
}
function getBalance()
{
    const balacnceElement=document.getElementById ("balance");
    const balace= balacnceElement.innerText;
    console.log("current-balance",balace)
    return Number(balace);
}

function setBalance(value)
{
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText=value;
}


function showOnly(id)
{
    const addmoney = document.getElementById("Add-Money") 
    const cashout = document.getElementById("Cashout") 
    const history = document.getElementById("history") 

    // hiddent part
    addmoney.classList.add("hidden");
    cashout.classList.add ("hidden");
    history.classList.add ("hidden");

    // show id 
     const selected=document.getElementById(id);
    selected.classList.remove("hidden");

}
