// Time and Date

let today = new Date();
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);




// Color coded for past, present, and future




// Save to Local Storage
let savedTasks = localStorage.getItem('tasks')


// Refresh page and events persist


