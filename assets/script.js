var dateEl = $("#current-day");

var saveButtonNine = $(".btn-nine");
var saveButtonTen = $(".btn-ten");
var saveButtonElleven = $(".btn-elleven");
var saveButtonTwelve = $(".btn-twelve");
var saveButtonOne = $(".btn-one");
var saveButtonTwo = $(".btn-two");
var saveButtonThree = $(".btn-three");
var saveButtonFour = $(".btn-four");
var saveButtonFive = $(".btn-five");
var rows = $(".row");

var descriptionInput = $("#description").value;
var fieldOfInput = $("textarea");

var descriptions = [];


var currentHour = parseInt(dayjs().format('HH'));

var row = $(".row");
var pastArr = [];
var presentArr = [];
var futureArr = [];

console.log(typeof currentHour);

//determine the color of the rows by current time
rows.each(function () {
  var rowHour = parseInt($(this).attr("data-hour"));
  console.log(rowHour);
  if (rowHour < currentHour) {
    $(this).addClass("row past")
  } else if (rowHour === currentHour) {
    $(this).addClass("row present")
  } else {
    $(this).addClass("row future")
  }
});


// display time at top of calendar    
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY hh:mm a');
  dateEl.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);


// Hour 9
$(saveButtonNine).on("click", function () {
  var user = $("#description-9").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxNine(user);
});

function getInputFromTextBoxNine(inputValue) {
  localStorage.setItem("9", inputValue);
}
//keep data on refresh-9
var hourNine = localStorage.getItem("9");
console.log(hourNine);
document.getElementById("description-9").value = hourNine;



// Hour 10
$(saveButtonTen).on("click", function () {
  var user = $("#description-10").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxTen(user);
});

function getInputFromTextBoxTen(inputValue) {
  localStorage.setItem("10", inputValue);
}
//keep data on refresh-10
var hourTen = localStorage.getItem("10");
console.log(hourTen);
document.getElementById("description-10").value = hourTen;



// Hour 11
$(saveButtonElleven).on("click", function () {
  var user = $("#description-11").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxElleven(user);
});

function getInputFromTextBoxElleven(inputValue) {
  localStorage.setItem("11", inputValue);
}
//keep data on refresh-11
var hourElleven = localStorage.getItem("11");
console.log(hourElleven);
document.getElementById("description-11").value = hourElleven;



// Hour 12
$(saveButtonTwelve).on("click", function () {
  var user = $("#description-12").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxTwelve(user);
});

function getInputFromTextBoxTwelve(inputValue) {
  localStorage.setItem("12", inputValue);
}
//keep data on refresh-12
var hourTwelve = localStorage.getItem("12");
console.log(hourTwelve);
document.getElementById("description-12").value = hourTwelve;



// Hour 1
$(saveButtonOne).on("click", function () {
  var user = $("#description-1").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxOne(user);
});

function getInputFromTextBoxOne(inputValue) {
  localStorage.setItem("1", inputValue);
}
//keep data on refresh-1
var hourOne = localStorage.getItem("1");
console.log(hourOne);
document.getElementById("description-1").value = hourOne;



// Hour 2
$(saveButtonTwo).on("click", function () {
  var user = $("#description-2").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxTwo(user);
});

function getInputFromTextBoxTwo(inputValue) {
  localStorage.setItem("2", inputValue);
}
//keep data on refresh-2
var hourTwo = localStorage.getItem("2");
console.log(hourTwo);
document.getElementById("description-2").value = hourTwo;



// Hour 3
$(saveButtonThree).on("click", function () {
  var user = $("#description-3").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxThree(user);
});

function getInputFromTextBoxThree(inputValue) {
  localStorage.setItem("3", inputValue);
}
//keep data on refresh-3
var hourThree = localStorage.getItem("3");
console.log(hourThree);
document.getElementById("description-3").value = hourThree;



// Hour 4
$(saveButtonFour).on("click", function () {
  var user = $("#description-4").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxFour(user);
});

function getInputFromTextBoxFour(inputValue) {
  localStorage.setItem("4", inputValue);
}
//keep data on refresh-4
var hourFour = localStorage.getItem("4");
console.log(hourFour);
document.getElementById("description-4").value = hourFour;



// Hour 5
$(saveButtonFive).on("click", function () {
  var user = $("#description-5").val();
  console.log("The save button was clicked.");
  console.log(user);
  getInputFromTextBoxFive(user);
});

function getInputFromTextBoxFive(inputValue) {
  localStorage.setItem("5", inputValue);
}
//keep data on refresh-5
var hourFive = localStorage.getItem("5");
console.log(hourFive);
document.getElementById("description-5").value = hourFive;
