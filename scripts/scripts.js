/*** 1. Box hide/show, 'this' keyword in JavaScript ***/

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

/*** 1. Box hide/show, 'this' keyword in JQuery ***/

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

/*** 2. Box hide after 3 secs in JavaScript ***/

//document.getElementById("box").onclick = function () {
//  setTimeout(function() {
//    document.getElementById("box").style.display = "none";
//  }, 3000);
//}

/*** 2. Box hide after 3 secs in JQuery ***/

//$(document).ready(function() {
//  $("#box").on('click', function() {
//    setTimeout(function() {
//      $("#box").hide();
//    }, 3000);
//  });
//});

/*** 3. Box will show at a random time, between 0-5000 miliseconds in JavaScript ***/

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

/*** 3. Box will show at a random time, between 0-5000 miliseconds in JQuery ***/

//$(document).ready(function() {
//  
//  var random = Math.random();
//  random = random * 5000;
//  random = Math.floor(random);
//  
//  setTimeout(function() {
//    $("#box").show();
//  }, random);
//  
//  $("#box").on('click', function() {
//    $(this).hide();
//  });
//});

/*** 4. Box will show at a random time, between 0-5000 miliseconds in JavaScript, and once clicked rehide the box for another random amount of time ***/

// To do this we have to put the previous code in a function to make recalling a new box easy

// showBox() will display a box after a random amount of time between 0-5000 miliseconds
//function showBox() {
//  
//  var random = Math.random();
//  random = random * 5000;
//  random = Math.floor(random);
//
//  setTimeout(function() {
//    document.getElementById("box").style.display="block";
//  }, random);
//}
//
//document.getElementById("box").onclick = function() {
//  this.style.display="none";
//  showBox(); 
//  // once clicked show another box in random amount of time
//}
//
//showBox(); 
// need to call function outside for the inital box to appear when the browser loads

/*** 4. Box will show at a random time, between 0-5000 miliseconds in JQuery, and once clicked rehide the box for another random amount of time ***/

// Same function as above ^^, but a lot shorter

function showBox() {
  
  var random = Math.random();
  random = random * 5000;
  random = Math.floor(random);
  
  setTimeout(function() {
    $("#box").show();
  }, random);
}

$(document).ready(function() {
  $("#box").on('click', function() {
    $("#box").hide();
    showBox();
  });
});

showBox();













