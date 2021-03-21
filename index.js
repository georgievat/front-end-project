"use strict";

(function() {

var modalClicked = false;
var modal = document.getElementById("cookie-modal");
var span = document.getElementsByClassName("close")[0];
var modalBtn = document.getElementsByClassName('modal-btn');
window.onscroll = function(e) {
  if (!modalClicked) {
    modal.style.display = "block";
    modalClicked = true;
  }
}

// When the user clicks on <span> (x), close the modal
if (span != undefined) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}

for (var i = 0; i < modalBtn.length; i++) {
  modalBtn[i].onclick = function() {
    modal.style.display = "none";
    if (this.id == "accept-cookie") {
      console.log("cookie prieto");
      setCookie('agreed', "true", 1);
    }
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

})();

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}