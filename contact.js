"use strict";

function validateForm(event) {
    event.preventDefault()
    var fName = document.forms["contact"]["Fullname"].value;
    var email = document.forms["contact"]["Email"].value;
    var comment = document.forms["contact"]["comment"].value;
    if (fName == "") {
      alert("Full name cannot be blank!");
      return false;
    } else if (!allLetter(fName)) {
      alert("Full name is not valid! Only letters are allowed!");
      return false;
    }
    if (email == "") {
      alert("Email cannot be blank!");
      return false;
    } else if (!validateEmail(email)) {
      alert("Email is not valid!");
      return false;
    }
    if (comment == "") {
      alert("Comment cannot be blank!");
      return false;
    }

    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/posts';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
    
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function allLetter(inputtxt) { 
  console.log(inputtxt);
    var letters = /^[a-zA-Z ]+$/;
    return inputtxt.match(letters)
}

var contactForm = document.getElementById("contact");
contactForm.addEventListener('submit', validateForm);