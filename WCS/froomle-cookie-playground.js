


//is er een froomle ID ? Zoniet 

function checkCookie() {
  var SID = getCookie("JSESSIONID");
  if (SID != "") {
   console.log("no froomle cookie");
  } else {
    setCookie(froomleID,getCookie(JSESSIONID),365);
    }
  }
}


function getCookie(cname) {
  var name = cname + "=";
  console.log(name);
  var decodedCookie = decodeURIComponent(document.cookie);
  console.log(decodedCookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
getCookie("JSESSIONID");


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}