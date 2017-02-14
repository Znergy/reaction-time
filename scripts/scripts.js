// Box hide/show, this keyword in JavaScript

document.getElementById("box").onclick = function() {
  var showing = true;
  if(showing) {
    this.style.display = "none";
    showing = false;
  } else {
    this.style.display = "block";
    showing = true;
  }
}

// Box hide/show, this keyword in JQuery

//$(document).ready(function() {
//  $("div#box").on('click', function() {
//    var showing = true;
//    if(showing) {
//      $(this).hide();
//      showing = false;
//    } else {
//      $(this).show();
//      showing = true;
//    }       
//  });
//});

