function istr(str) {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < 10; i++) {
    if (str[i] in num) {
      return 1;
    }
  }
  return 0;
}
function validate(){
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const number = document.getElementById("number").value;
  const fnameError = document.getElementById("fname-error");
  const lnameError = document.getElementById("lname-error");
  const numberError = document.getElementById("num-error");
  if (istr(fname)) {
    fnameError.textContent="Use only Alphabets";
    return false;
  }
  else{
    fnameError.textContent=""
  }
  if (istr(lname)) {
    lnameError.textContent="Use only Alphabets";
    return false;
  }
  else{
    lnameError.textContent="";
  }
  if (!istr(number)) {
    numberError.textContent="Use only Numbers";
    return false;
  }
  else{
    numberError.textContent="";
  }
  }



