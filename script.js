
//wraps the dom to load  html and css first
$(document).ready(function () {


//dislays the date in certain format
var today = dayjs();
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
   //selects text to be added to local storage
  $(".saveBtn").on("click", function () {
   
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
  })

//loads saved data to local storage

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



function hourTracker() {
  //get current number of hours.
  var currentHour = moment().hour();

  // loop over time blocks
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
    if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  })
}
hourTracker();

}) 
  
  

  
