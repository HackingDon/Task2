function istr(str) {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < 10; i++) {
    if (str[i] in num) {
      return 1;
    }
  }
  return 0;
}
function isspch(str) {
  for (let i = 0; i < str.length; ++i) {
    let ch = str.charCodeAt(i);
    if (
      !(ch >= 65 && ch <= 90) &&
      !(ch >= 97 && ch <= 122) &&
      !(ch >= 48 && ch <= 57)
    ) {
      return 1;
    }
  }
  return 0;
}
function checkpass() {
  const password = document.getElementById("pass").value;
  const conpass = document.getElementById("con-pass").value;
  let passmatch = document.getElementById("passmatch");
  if (password == conpass) {
    passmatch.textContent = "";
    return true;
  } else if(conpass!='') {
    passmatch.textContent = "Did not match Password";
    return false;
  }
  else{
    passmatch.textContent = "";
    return false;
  }
}
function isNumberKey(evt) {
  var charCode = evt.which
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}
function isAlphaKey(evt) {
  var charCode = evt.which 
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    return true;
  }
  return false;
}

function hasUpperCase(str) {
  for (let i = 0; i < str.length; ++i) {
    let ch = str.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
      return 1;
    }
  }
  return 0;
}
function passMan() {
  debugger;
  const password = document.getElementById("pass").value;
  if (hasUpperCase(password)) {
    document.getElementById("li1").style.color = "green";
  } else {
    document.getElementById("li1").style.color = "";
  }
  if (isspch(password)) {
    document.getElementById("li2").style.color = "green";
  } else {
    document.getElementById("li2").style.color = "";
  }
  if (istr(password)) {
    document.getElementById("li3").style.color = "green";
  } else {
    document.getElementById("li3").style.color = "";
  }
  if (hasUpperCase(password) && isspch(password) && istr(password)) {
    return true;
  } else {
    return false;
  }
}
function validate() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;
  const address = document.getElementById("address").value;
  const password = document.getElementById("pass").value;
  const conpass = document.getElementById("con-pass").value;
  const fnameError = document.getElementById("fname-error");
  const lnameError = document.getElementById("lname-error");
  const numberError = document.getElementById("num-error");
  const mailError = document.getElementById("mail-error");
  const fbError = document.getElementById("fb-error");
  const addError = document.getElementById("add-error");
  const passError = document.getElementById("pass-error");
  const conpassError = document.getElementById("conpass-error");
  email == ""
    ? (mailError.textContent = "Please fill this")
    : (mailError.textContent = "");
  fname == ""
    ? (fnameError.textContent = "Please fill this")
    : (fnameError.textContent = "");
  lname == ""
    ? (lnameError.textContent = "Please fill this")
    : (lnameError.textContent = "");
  number == ""
    ? (numberError.textContent = "Please fill this")
    : (numberError.textContent = "");
  feedback == ""
    ? (fbError.textContent = "Please fill this")
    : (fbError.textContent = "");
  address == ""
    ? (addError.textContent = "Please fill this")
    : (addError.textContent = "");
  password == ""
    ? (passError.textContent = "Please fill this")
    : (passError.textContent = "");
  conpass == ""
    ? (conpassError.textContent = "Please fill this")
    : (conpassError.textContent = "");
  if (
    fnameError.textContent == "" &&
    lnameError.textContent == "" &&
    numberError.textContent == ""
  ) {
    return true;
  } else {
    return false;
  }
}
