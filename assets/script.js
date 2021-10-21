// Time and Date

let today = new Date(); 
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let actualTime = moment().format('MMMM Do, YYYY - hh:mm a');
let hour = 
$('#currentDay')
    .text(actualTime);

// Time blocks for tasks

let eightTimeBlock = document.getElementById("h8");
let nineTimeBlock = document.getElementById("h9");
let tenTimeBlock = document.getElementById("h10");
let elevenTimeBlock = document.getElementById("h11");
let twelveTimeBlock = document.getElementById("h12");
let oneTimeBlock = document.getElementById("h1");
let twoTimeBlock = document.getElementById("h2");
let threeTimeBlock = document.getElementById("h3");
let fourTimeBlock = document.getElementById("h4");
let fiveTimeBlock = document.getElementById("h5");
let inputEl = document.getElementById("description");

// Color coded for past, present, and future

let currentTime = $('.description');

    if (inputEl < actualTime) {
        $(description).addClass('past')
    }

    else if (inputEl === actualTime) {
        $(description).addClass('present')
    }

    else if (inputEl > actualTime) {
        $(description).addClass('future')
    }

// Save to Local Storage





// Refresh page and events persist
let savedTasks = function() {
    JSON.parse(localStorage.getItem("tasks"));
}
