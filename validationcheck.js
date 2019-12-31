function checkForm(form)
{
if(form.userid_1.value == "") {
      alert("Error: Userid cannot be blank!");
      form.userid_1.focus();
      return false;
}

if (form.pwd_1.value == "")  
{ 
  alert("Password can't be blank");
  form.pwd_1.focus();
  return false;
}

 pattern = /^[a-zA-Z0-9*&^%$#@!._]{7,}$/;
  if(!pattern.test(form.pwd_1.value)){
  alert("Password should be minimum of 8 characters");
  form.pwd_1.focus();
  return false;
  }
 alert("Login successfull !!");
 return true;
}
