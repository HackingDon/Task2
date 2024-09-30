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
  const passmatch = document.getElementById("passmatch");
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
function eachvalidate(inputid,spanid){
  let val1 = document.getElementById(inputid).value;
  let val2 = document.getElementById(spanid);
  if (val1==""){
    val2.textContent = "Please fill this"
    return false
  }
  else{
    val2.textContent = ""
    return true
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
function mailman(){
  const email = document.getElementById("email").value;
  const mailError = document.getElementById("mail-error");
  if(email.includes('@' && '.')){
    mailError.textContent = ""
  }
  else{
    mailError.textContent = "Please include @ ."
  }
}
function passtoggle(pass,eye,sp){
  const password = document.getElementById(pass);
  const text = document.getElementById(sp)
  if(password.type == 'text'){
    password.type = 'password';
  }
  else{
    password.type = 'text';
  }
  if(text.textContent == 'Show Password'){
    text.textContent = 'Hide Password';
  }
  else{
    text.textContent = 'Show Password';
  }
  if(document.getElementById(eye).src.endsWith("eye-slash.svg")){
    document.getElementById(eye).src = "images/eye.svg"
  }
  else{
    document.getElementById(eye).src = "images/eye-slash.svg"
  }
}
function passMan() {
  const password = document.getElementById("pass").value;
  const passError = document.getElementById("pass-error");
  const conpass = document.getElementById("con-pass").value;
  const passmatch = document.getElementById("passmatch");

  const hasUpper = hasUpperCase(password);
  const hasSpecial = isspch(password);
  const hasNumber = istr(password);
  const isValidLength = password.length >= 8;
  if (password == conpass) {
    passmatch.textContent = "";
  } else if(conpass!='') {
    passmatch.textContent = "Did not match Password";
  }
  else{
    passmatch.textContent = "";
  }

  document.getElementById("li1").style.color = hasUpper ? "green" : "red";
  document.getElementById("li2").style.color = hasSpecial ? "green" : "red";
  document.getElementById("li3").style.color = hasNumber ? "green" : "red";

  if (hasUpper && hasSpecial && hasNumber && isValidLength) {
    passError.textContent = "";
    return true;
  } else {
    passError.textContent = "Please fill password as per condition";
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
