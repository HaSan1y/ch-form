let x,y;

function validateEmail(email) {
  console.log("s");
  var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return re.test(email);
}


function showMainDiv() {
  email = document.getElementById("name").value;
  if (!validateEmail(email)) {
    alert("Invalid email address!");
    return false;
  } else {
    x = document.getElementById("name").value;
    y = document.getElementById("asdf");
    y.innerText = x;

    document.querySelector(".main").style.display = "block";
    document.querySelector("main").style.display = "none";
  }
}
