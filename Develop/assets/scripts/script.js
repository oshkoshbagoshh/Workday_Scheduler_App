/****
 * 
 * Enter in your schedule. Works with Third Party APIS


//Workday Scheduler - Pseudo Code 


//TODO:Need to add more hours for input to your workday scheduler in the HTML

 - do this by using attributes and changing the class via jQuery 

//TODO:Display todays date via DayJS ] -- DONE(mvp)

//TODO:Functionality for the save button...addevent listener...need to store input to the local storage

//TODO: Create Timer Function
    //Need to loop the hour blocks based on current time. 
    //With current time loop, this will determine what color block is needed. Add class based upon time of day. 

//TODO:Call on timer function to begin application.
 
 *       <!-- Use class for "past", "present", and "future" to apply styles to the
        time-block divs accordingly. The javascript will need to do this by
        adding/removing these classes on each div by comparing the hour in the
        id to the current hour. The html provided below is meant to be an example
        demonstrating how the css provided can be leveraged to create the
        desired layout and colors. The html below should be removed or updated
        in the finished product. Remember to delete this comment once the
        code is implemented.
        -->
 * 
 * 
 * 
 * 
 * 
 * 
 */


// // Step 1 - Get today and attach to front 
// const todayIs = console.log(dayjs().format("MMM D, YYYY"));

// // declare global variables 
// const now1 = $.now();
// // console.log(now1);

// //calculate today

// // # TESTING #REMOVE 
// var todayDay = $(dayjs);
// console.log("today is:" + todayDay);

// var currentDateFormatted = dayjs().format("MM/DD/YYYY");

// console.log("today is" + " " + currentDateFormatted);
// // //check type 
// console.log(typeof(currentDateFormatted));


// // function for printing todays date
// function  printToday () { 

//     var currentDateStatement = "today is " + " " + currentDateFormatted;
//     return currentDateStatement;




//  }
// printToday();


// // use DayJS to get the current day and format it 

// var today = dayjs();
// $('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss'));
// // $('#currentDay').append("test");
// // $("document")

// var dayOfWeek = dayjs().day();
// $('#currentDay').text(dayOfWeek);

// // insert a statement saying what day it is


// /*********************
 

// function for timer app. this will create a variable for the current day, and then check that to see if it falls into 
// one of three states: 
 

//  1. Past
//  2. Present
//  3. Future 

//  ****/


 // add a welome message and get the time of everything. Keep
 var currentHour = dayjs().format('hh');
 var currentHourString = ("The current time is " + " " + currentHour);
 console.log(currentHour);
 console.log(currentHourString);
 
 function showWelcomeMessage() {
    var currentTime = dayjs().format('hh:mm:ss a');
    var currentTimeString = ("the current time is " + " " + currentTime);
    console.log(currentTime); 
    console.log(currentTimeString);
    $("#currentDay").append("Today is " + " " + dayjs().format("dddd")+" " + "and" +"  " +" " + " " + currentTimeString)



 }
showWelcomeMessage();


const hideAfterLunch = $("#scroll").hide();

//TODO: save into local storage
// function to change style

// if (condition) {
    
// } else {
    
// }


function checkCurrentTime (currentHour) {

    // check 9
    const userHour = dayjs().now().format("hh");
    if (userHour == 9 ) {
        $("hour-9").attr("class", "present");
    } else if (userHour > 9)  {
        $("hour-9").attr("class","future")
        $("hour-9").data("some data")

}   else {
    $("hour-9").attr("class","past");

//check 10

    const userHour = dayjs().now().format("hh");
    if (userHour == 10 ) {
        $("hour-10").attr("class", "present");
    } else if (userHour > 10)  {
        $("hour-10").attr("class","future")
        $("hour-10").data("some data")

}   else {
    $("hour-10").attr("class","past");


//check 11

const userHour = dayjs().now().format("hh");
if (userHour == 11 ) {
    $("hour-11").attr("class", "present");
} else if (userHour > 11)  {
    $("hour-11").attr("class","future")
    $("hour-11").data("some data")

}   else {
$("hour-11").attr("class","past");


// check 12
const userHour = dayjs().now().format("hh");
if (userHour == 12 ) {
    $("hour-12").attr("class", "present");
} else if (userHour > 11)  {
    $("hour-12").attr("class","future")
    $("hour-12").data("some data")

}   else {
$("hour-12").attr("class","past");


//check 1pm, 2pm, 3pm, 4pm, 5pm




const userHour = dayjs().now().format("hh");
if (userHour == 1 ) {
    $("hour-1").attr("class", "present");
} else if (userHour > 11)  {
    $("hour-1").attr("class","future")
    $("hour-1").data("some data")

}   else {
$("hour-1").attr("class","past");

    
}



checkCurrentTime();

// var currentHour = dayjs().format('hh');
// var currentHourString = ("The current time is " + " " + currentHour);
// console.log(currentHour);
// console.log(currentHourString);

// creating div tags for the hours in a day 
var hoursInADay = 24;
// var newDivHourIDs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// console.log(newDivHourIDs);
var presentBlock = document.getElementsByClassName("present");
var pastBlock = document.getElementsByClassName("past");
var futureBlocks = document.getElementsByClassName("future");

// remove the attribute, then add it based on the class being present

$(selector).removeAttr(attribute);



console.log(presentBlock);
console.log(pastBlock);
console.log(futureBlocks);
//if else statement to change div 

// console.log(divTags);


// console.log(hoursInADay / 60);
// console.log(hoursInADay);


// var blockDivs =


// need a for loop that will go through 24 hours in the day, and assign each of them a unique ID 




// create the function to check the current time then use if else to color it 

//create the function to save something on a click
//need event listener 


}
showWelcomeMessage();


//did user scroll to the bottom 

// $(window).scroll(hideBlocks())  {




// //     // Code to execute when the scroll event occurs
// //     // You can access the scroll position using `$(window).scrollTop()`
// //     // For example, you can check if the user has scrolled to the bottom of the page:
// //     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
// //       // User has scrolled to the bottom
// //       console.log("Scrolled to the bottom of the page");
// //     }
// //   });


// }
// }
// }
// }
}

}
}
}