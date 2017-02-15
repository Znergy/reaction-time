/*** Box hide/show, 'this' keyword in JavaScript ***/

//document.getElementById("box").onclick = function() {
//  var showing = true;
//  if(showing) {
//    this.style.display = "none";
//    showing = false;
//  } else {
//    this.style.display = "block";
//    showing = true;
//  }
//}

/*** Box hide/show, 'this' keyword in JQuery ***/

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

/*** Box hide after 3 secs in JavaScript ***/

//document.getElementById("box").onclick = function () {
//  setTimeout(function() {
//    document.getElementById("box").style.display = "none";
//  }, 3000);
//}

/*** Box hide after 3 secs in JQuery ***/

//$(document).ready(function() {
//  $("#box").on('click', function() {
//    setTimeout(function() {
//      $("#box").hide();
//    }, 3000);
//  });
//});

/*** Box will show at a random time, between 0-5000 miliseconds in JavaScript ***/

//var random = Math.random();
//random = random * 5000;
//random = Math.floor(random);
//
//setTimeout(function() {
//  
//  document.getElementById("box").style.display="block";
//}, random);
//
//document.getElementById("box").onclick = function() {
//  this.style.display="none";
//}

/*** Box will show at a random time, between 0-5000 miliseconds in JQuery ***/

$(document).ready(function() {
  
  var random = Math.random();
  random = random * 5000;
  random = Math.floor(random);
  
  setTimeout(function() {
    $("#box").show();
  }, random);
  
  $("#box").on('click', function() {
    $(this).hide();
  });
});







