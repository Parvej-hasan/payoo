console.log("somthing is happen");

document.getElementById("loging-btn").addEventListener("click", function () {
  // get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  // get the pin
  const inputPin = document.getElementById("pin-number");
  const pin = inputPin.value;
  console.log(pin);
  // match pin and mobile_Number
  if (contactNumber == "01234567890" && pin == "1234") {
    alert("Login succesfully");
    // window.location.replace("/home.html")
    window.location.assign("./home.html");
    // .mistake chilo
  } else {
    alert("logging nehi hoga re baba");
    return;
  }
  // true>>alart>homepage
  // ture::>retur
});
