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


// Step 1 - Get today and attach to front 
const todayIs = console.log(dayjs().format("MMM D, YYYY"));

// declare global variables 
const now1 = $.now();
// console.log(now1);

//calculate today

// # TESTING #REMOVE 
var todayDay = $(dayjs);
console.log("today is:" + todayDay);

var currentDateFormatted = dayjs().format("MM/DD/YYYY");

console.log("today is" + " " + currentDateFormatted);
// //check type 
console.log(typeof(currentDateFormatted));


// function for printing todays date
function  printToday () { 

    var currentDateStatement = "today is " + " " + currentDateFormatted;
    return currentDateStatement;




 }
printToday();


// use DayJS to get the current day and format it 

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss'));
$('#currentDay').append("test");
// $("document")

var dayOfWeek = dayjs().day();
$('#currentDay').text(dayOfWeek);

// insert a statement saying what day it is


/*********************
 

function for timer app. this will create a variable for the current day, and then check that to see if it falls into 
one of three states: 
 

 1. Past
 2. Present
 3. Future 

 ****/


 // getting current hour to check if it fits the block 
 
 var currentTime = dayjs().format('hh:mm:ss');
var currentTimeString = ("The current time is " + " " + currentTime);
console.log(currentTime); 
console.log(currentTimeString);
$("#currentDay").append("Today is " + " " + currentTimeString)


var currentHour = dayjs().format('hh');
var currentHourString = ("The current time is " + " " + currentHour);
console.log(currentHour);
console.log(currentHourString);

//
var hoursInADay = 24;

console.log(hoursInADay);


// var blockDivs =


// need a for loop that will go through 24 hours in the day, and assign each of them a unique ID 




// create the function to check the current time then use if else to color it 




function updateColors() {
    // if currenthour is less than now, then change the display to grey

}