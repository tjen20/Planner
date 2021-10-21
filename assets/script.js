// Time and Date

var today = new Date(); 
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var actualTime = moment().format('MMMM Do, YYYY - hh:mm a');
$('#currentDay')
    .text(actualTime);
               

console.log(currentDay)
// Color coded for past, present, and future




// Save to Local Storage
let savedTasks = localStorage.getItem('tasks')


// Refresh page and events persist


