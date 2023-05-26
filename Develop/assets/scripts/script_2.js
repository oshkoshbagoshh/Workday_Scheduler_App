/* 
 * @Author: AJ Javadi
 * @Email: someone@example.com
 * @Date: 2023-05-26 05:13:09 
 * @Last Modified by: Someone
 * @Last Modified time: 2023-05-26 06:20:19
 * @Description: file:///Users/aj/Desktop/bootcamp/Homework/5.%20Workday%20Scheduler/Workday_Scheduler_App/Develop/assets/scripts/script_2.js
 

// 2nd version of script to fix the issues from the other one 
//TODO: once you adjust this, unlink the other, and rename it zzor something

/Workday Scheduler - Pseudo Code 


//TODO:Need to add more hours for input to your workday scheduler in the HTML

 - do this by using attributes and changing the class via jQuery 

//TODO:Display todays date via DayJS ]

//TODO:Functionality for the save button...
    addevent listener...
    need to store input to the local storage

//TODO: Create Timer Function
    //Need to loop the hour blocks based on current time. 
    //With current time loop, this will determine what color block is needed. Add class based upon time of day. 

//TODO:Call on timer function to begin application.
 
/*
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
**********/
console.log(dayjs().format("MMM D, YYYY"));
currentDate = dayjs().format("MMM D, YYYY");
currentTime = dayjs().format("DD/MM/YYYY")
console.log('currentTime = dayjs().format("DD/MM/YYYY"): ', currentTime = dayjs().format("DD/MM/YYYY"));

// $(selectors);
// window.alert("Hello, world!");
typeof(currentDate)
console.log('typeof(currentDate): ', typeof(currentDate));


$(".saveButton").click(function (e) {
    // Do anything

    
    $()
});

