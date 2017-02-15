/*
* Application: Reaction Time
* Programmer: Ryan Jones
* Version: 02/14/2017
*/

/* Important Notes *
* 1) JavaScript code is marked with an 'a' (1a, 2a, etc)
* 2) JQuery code is marked with a 'b' (1b, 2b, etc)
*/


/*** 1a. Box hide/show, 'this' keyword in JavaScript ***/

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

/*** 1b. Box hide/show, 'this' keyword in JQuery ***/

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

/*** 2a. Box hide after 3 secs in JavaScript ***/

//document.getElementById("box").onclick = function () {
//  setTimeout(function() {
//    document.getElementById("box").style.display = "none";
//  }, 3000);
//}

/*** 2b. Box hide after 3 secs in JQuery ***/

//$(document).ready(function() {
//  $("#box").on('click', function() {
//    setTimeout(function() {
//      $("#box").hide();
//    }, 3000);
//  });
//});

/*** 3a. Box will show at a random time, between 0-5000 miliseconds in JavaScript ***/

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

/*** 3b. Box will show at a random time, between 0-5000 miliseconds in JQuery ***/

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

/*** 4a. Box will show at a random time, between 0-5000 miliseconds in JavaScript, and once clicked rehide the box for another random amount of time ***/

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

/*** 4b. Box will show at a random time, between 0-5000 miliseconds in JQuery, and once clicked rehide the box for another random amount of time ***/

// Same function as above ^^, but a lot shorter

//function showBox() {
//  
//  var random = Math.random();
//  random = random * 5000;
//  random = Math.floor(random);
//  
//  setTimeout(function() {
//    $("#box").show();
//  }, random);
//}
//
//$(document).ready(function() {
//  $("#box").on('click', function() {
//    $("#box").hide();
//    showBox();
//  });
//});
//
//showBox();

/*** 5a. this will build on our prior code and track how quickly the user taps the box, using a method called Date.now() ***/

//var timeCreated; var timeClicked; var userSpeed;
//
//function showBox() {
//  
//  var random = Math.random();
//  random = random * 5000;
//  random = Math.floor(random);
//
//  setTimeout(function() {
//    document.getElementById("box").style.display="block";
//    timeCreated = Date.now(); // this tracks initial creation
//  }, random);
//}
//
//document.getElementById("box").onclick = function() {
//  this.style.display="none";
//  timeClicked = Date.now(); // this tracks user click time
//  userSpeed = (timeClicked - timeCreated) / 1000;
//  // saves time difference and changes from milisecs to secs
//  
//  alert(userSpeed); // prints time to screen
//  showBox();
//}
//
//showBox();

/*** 5b. this will build on our prior code and track how quickly the user taps the box, using a method called Date.now() ***/

var timeCreated, timeClicked, userSpeed;

function showBox() {
  var random = Math.random();
  random = random * 5000;
  random = Math.floor(random);

  setTimeout(function() {
    $("#box").show();
    timeCreated = Date.now();
  }, random);
}

$(document).ready(function() {
  $("#box").on('click', function() {
    $(this).hide();
    
    timeClicked = Date.now();
    
    userSpeed = (timeCreated - timeClicked) / 1000;
    alert(userSpeed);
    showBox();
  });
});

showBox();









