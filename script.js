function istr(str) {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < 10; i++) {
    if (str[i] in num) {
      return 0;
    }
  }
  return 1;
}
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const fnameError = document.getElementById("fname-error");
  const lnameError = document.getElementById("lname-error");
  const emailError = document.getElementById("email-error");
  const numberError = document.getElementById("num-error");
  const form = document.getElementById("form");

  form.addEventListener("submit",(e)=>{
    if(fname.value==' '||fname.value==null){
        e.preventDefault();
        fnameError.innerHTML = "Name is required";
    }
  })



