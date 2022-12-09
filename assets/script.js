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


var currentHour = dayjs().format('hh a');

var row = $(".row");
var pastArr =[];
var presentArr = [];
var futureArr = [];

console.log(currentHour);

//determine the color of the rows by current time
rows.each(function() {
  var rowHour = $(this).attr("data-hour");

  if (rowHour < currentHour) {
    $(this).addClass("row past")
  }else if(rowHour === currentHour){
    $(this).addClass("row present")
  }else{
    $(this).addClass("row future")
  }
});


// display time at top of calendar    
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY hh:mm:ss a');
  dateEl.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// Hour 9
  $(saveButtonNine).on("click", function(){
    var user = $("#description-9").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxNine(user);
  });
  
  function getInputFromTextBoxNine(inputValue) {
    localStorage.setItem("description-9", JSON.stringify(inputValue));
  } 

  // Hour 10
  $(saveButtonTen).on("click", function(){
    var user = $("#description-10").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxTen(user);
  });

  function getInputFromTextBoxTen(inputValue) {
    localStorage.setItem("description-10", JSON.stringify(inputValue));
  } 

  // Hour 11
  $(saveButtonElleven).on("click", function(){
    var user = $("#description-11").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxElleven(user);
  });

  function getInputFromTextBoxElleven(inputValue) {
    localStorage.setItem("description-11", JSON.stringify(inputValue));
  } 

  // Hour 12
  $(saveButtonTwelve).on("click", function(){
    var user = $("#description-12").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxTwelve(user);
  });

  function getInputFromTextBoxTwelve(inputValue) {
    localStorage.setItem("description-12", JSON.stringify(inputValue));
  } 

  // Hour 1
  $(saveButtonOne).on("click", function(){
    var user = $("#description-1").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxOne(user);
  });

  function getInputFromTextBoxOne(inputValue) {
    localStorage.setItem("description-1", JSON.stringify(inputValue));
  } 

  // Hour 2
  $(saveButtonTwo).on("click", function(){
    var user = $("#description-2").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxTwo(user);
  });

  function getInputFromTextBoxTwo(inputValue) {
    localStorage.setItem("description-2", JSON.stringify(inputValue));
  } 

  // Hour 3
  $(saveButtonThree).on("click", function(){
    var user = $("#description-3").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxThree(user);
  });

  function getInputFromTextBoxThree(inputValue) {
    localStorage.setItem("description-3", JSON.stringify(inputValue));
  } 

  // Hour 4
  $(saveButtonFour).on("click", function(){
    var user = $("#description-4").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxFour(user);
  });

  function getInputFromTextBoxFour(inputValue) {
    localStorage.setItem("description-4", JSON.stringify(inputValue));
  } 

  // Hour 5
  $(saveButtonFive).on("click", function(){
    var user = $("#description-5").val();
    console.log("The save button was clicked.");
    console.log(user);
    getInputFromTextBoxFive(user);
  });

  function getInputFromTextBoxFive(inputValue) {
    localStorage.setItem("description-5", JSON.stringify(inputValue));
  } 


//console.log(descriptionInput);




  /* function getInputFromTextBox() {
    localStorage.setItem("description", descriptionInput);
    console.log(descriptionInput);
    //localStorage.getItem(descriptionInput);
  }; */



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


