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

let currentTime = $('#description');

    if(moment().format('HH') > 8){
        $('#8').addClass('past')
    }

    if(moment().format('HH') > 9){
        $('#9').addClass('past')
    }

    if(moment().format('HH') > 10){
        $('#10').addClass('past')
    }

    if(moment().format('HH') > 11){
        $('#11').addClass('past')
    }

    if(moment().format('HH') > 12){
        $('#12').addClass('past')
    }

    if(moment().format('HH') > 13){
        $('#13').addClass('past')
    }

    if(moment().format('HH') > 14){
        $('#14').addClass('past')
    }

    if(moment().format('HH') > 15){
        $('#15').addClass('past')
    }

    if(moment().format('HH') > 16){
        $('#16').addClass('past')
    }

    if(moment().format('HH') > 17){
        $('#17').addClass('past')
    }

// for future
    if(moment().format('HH') < 8){
        $('#8').addClass('future')
    }

    if(moment().format('HH') < 9){
        $('#9').addClass('future')
    }

    if(moment().format('HH') < 10){
        $('#10').addClass('future')
    }

    if(moment().format('HH') < 11){
        $('#11').addClass('future')
    }

    if(moment().format('HH') < 12){
        $('#12').addClass('future')
    }

    if(moment().format('HH') < 13){
        $('#13').addClass('future')
    }

    if(moment().format('HH') < 14){
        $('#14').addClass('future')
    }

    if(moment().format('HH') < 15){
        $('#15').addClass('future')
    }

    if(moment().format('HH') < 16){
        $('#16').addClass('future')
    }

    if(moment().format('HH') < 17){
        $('#17').addClass('future')
    }

    // for present
    if(moment().format('HH') === 8){
        $('#8').addClass('present')
    }

    if(moment().format('HH') === 9){
        $('#9').addClass('present')
    }

    if(moment().format('HH') === 10){
        $('#10').addClass('present')
    }

    if(moment().format('HH') === 11){
        $('#11').addClass('present')
    }

    if(moment().format('HH') === 12){
        $('#12').addClass('present')
    }

    if(moment().format('HH') === 13){
        $('#13').addClass('present')
    }

    if(moment().format('HH') === 14){
        $('#14').addClass('present')
    }

    if(moment().format('HH') === 15){
        $('#15').addClass('present')
    }

    if(moment().format('HH') === 16){
        $('#16').addClass('present')
    }

    if(moment().format('HH') === 17){
        $('#17').addClass('present')
    }

// Save to Local Storage



// Refresh page and events persist
let savedTasks = function() {
    JSON.parse(localStorage.getItem("tasks"));
}
