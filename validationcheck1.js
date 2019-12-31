function namecheck1(n)
{      
if (n.value.length == 0)  
{ alert("Name can't be blank");
  return (false);
}
else 
{
  var pattern = /^[A-Za-z]+$/;
  if(n.value.match(pattern));
  else
  window.alert("Enter Only alphabetic characters");
 } 
}

function useridcheck1(u)
{      
if (u.value.length == 0)  
{ alert("User ID can't be blank");
  return (false);
}
}

function pwdcheck1(p)
{      
if (p.value.length == 0)  
{ alert("Password can't be blank");
  return (false);
}
else 
{
  var pattern = /^[a-zA-Z0-9*&^%$#@!._]{7,}$/;
  if(p.value.match(pattern));
  else
  window.alert("Password should be minimum of 8 characters");
 } 
}

function phnumbercheck1(pn)
{      
if (pn.value.length == 0)  
{ alert("Phone number can't be blank");
  return (false);
}
else 
{
  var pattern = /^[6-9]{1}[0-9]{9}$/;
  if(pn.value.match(pattern));
  else
  window.alert("Incorrect PhoneNumber");
 } 
}

function emailcheck(e)
{      
if (e.value.length == 0)  
{ alert("Email ID can't be blank");
  return (false);
}
else 
{
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(e.value.match(pattern));
  else
  window.alert("Enter valid Email ID");
 } 
}

function submitForm2()
{
 var a = namecheck1(n);	
 var b = useridcheck1(u);
 var c = passcheck1(p);
 var d = phnumbercheck1(pn);
 var x = emailcheck(e);
 if(a&&b&&c&&d&&x)
	 return true;
 else
	 return false;
}
