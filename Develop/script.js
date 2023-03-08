// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
console.log(today);
$("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss a"));

// get any values from local storage
var storedText9 = localStorage.getItem('#hour-9');
// set into html 
document.getElementById("text-9").value = storedText9;

var storedText10 = localStorage.getItem('#hour-10');
// set into html 
document.getElementById("text-10").value = storedText10;

var storedText11 = localStorage.getItem('#hour-11');
// set into html 
document.getElementById("text-11").value = storedText11;

var storedText12 = localStorage.getItem('#hour-12');
// set into html 
document.getElementById("text-12").value = storedText12;

var storedText13 = localStorage.getItem('#hour-13');
// set into html 
document.getElementById("text-13").value = storedText13;

var storedText14 = localStorage.getItem('#hour-14');
// set into html 
document.getElementById("text-14").value = storedText14;

var storedText15 = localStorage.getItem('#hour-15');
// set into html 
document.getElementById("text-15").value = storedText15;

var storedText16 = localStorage.getItem('#hour-16');
// set into html 
document.getElementById("text-16").value = storedText16;

var storedText17 = localStorage.getItem('#hour-17');
// set into html 
document.getElementById("text-17").value = storedText17;


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $( "#hour-9" ).on( "click", function() {
    // grab text that user has typed in
    var hourText9 = document.getElementById("text-9").value;
    // set text to local storage
    localStorage.setItem("#hour-9", hourText9)
  });

  $( "#hour-10" ).on( "click", function() {
    // grab text that user has typed in
    var hourText10 = document.getElementById("text-10").value;
    // set text to local storage
    localStorage.setItem("#hour-10", hourText10)
  });

  $( "#hour-11" ).on( "click", function() {
    // grab text that user has typed in
    var hourText11 = document.getElementById("text-11").value;
    // set text to local storage
    localStorage.setItem("#hour-11", hourText11)
  });

  $( "#hour-12" ).on( "click", function() {
    // grab text that user has typed in
    var hourText12 = document.getElementById("text-12").value;
    // set text to local storage
    localStorage.setItem("#hour-12", hourText12)
  });

  $( "#hour-13" ).on( "click", function() {
    // grab text that user has typed in
    var hourText13 = document.getElementById("text-13").value;
    // set text to local storage
    localStorage.setItem("#hour-13", hourText13)
  });

  $( "#hour-14" ).on( "click", function() {
    // grab text that user has typed in
    var hourText14 = document.getElementById("text-14").value;
    // set text to local storage
    localStorage.setItem("#hour-14", hourText14)
  });

  $( "#hour-15" ).on( "click", function() {
    // grab text that user has typed in
    var hourText15 = document.getElementById("text-15").value;
    // set text to local storage
    localStorage.setItem("#hour-15", hourText15)
  });

  $( "#hour-16" ).on( "click", function() {
    // grab text that user has typed in
    var hourText16 = document.getElementById("text-16").value;
    // set text to local storage
    localStorage.setItem("#hour-16", hourText16)
  });

  $( "#hour-17" ).on( "click", function() {
    // grab text that user has typed in
    var hourText17 = document.getElementById("text-17").value;
    // set text to local storage
    localStorage.setItem("#hour-17", hourText17)
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().hour();
  console.log(currentHour);

  $(".time-block").each(function() {
    var hourBlock = $(this).attr("data-hour");
    console.log(this);
    console.log(hourBlock);
  if (currentHour > hourBlock) {
      $().addClass("past");
  } else if (currentHour = hourBlock) {
    $().removeClass("past");
    $().removeClass("future");
    $().addClass("present");
  } else {
    $().removeClass("past");
    $().removeClass("present");
    $().addClass("future");
    }  
  })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
