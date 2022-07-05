var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

// check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  formEl.reset();
  // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);


// buttonEl.addEventListener("click", function() {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
// });



/* callback function
A callback is a function passed as an argument to another function.
setInterval, which executes the callback repeatedly at a set interval.
====================
var nammeEl = document.querySelector("#name");
var imageEl = document.querySelector("#general");

var getname = function(callBack) {
    var name = prompt("Enter Your Name");
    callBack(name);
}

var insertName = function(name) {
    nameEl.textContent = "General " + name;
    imageEl.setAttribute('src', "gg.jpg");
}

getname(insertName);

timer function
==============
var counter = 10
var countdown = function() {
    console.log(counter);
    counter--;
    if (counter === 0){
        console.log("blastoff");
        clearInterval(startCountdown);
    };
};

var startCountdown = setInterval(countdown, 1000);

setting time out function
setTimeout, which executes the callback after a set delay.
=========================
var sayHello = function(){
    console.log("Hello there");
};

var timedGreeting = setTimeout(sayHello, 2000);
// clearTimeout(timedGreeting);

dynamic way of interacting
==========================
<ul class="list-group" id="villains">
    <li class="list-group-item">Darth Vader</li>
    <li class="list-group-item">Odium</li>
    <li class="list-group-item">Gerald Tarrant</li>
    <li class="list-group-item">Voldermort</li>
</ul>
<script>
    var listEl = document.querySelector("#villains");
    var villainInput = document.querySelector("#vallainInput");
    var villainSubmitClick = document.querySelector("#villainSubmit");

    villainSubmitClick.addEventListener("click", insertVillian);

    function insertVillian(event) {
        event.preventDefault();
        var villainListEl = document.createElement("li");
        villainListEl.textCont = villainInput.value;
        villainListEl.className = "list-group-item";
        listEl.appendChild(villainListEl);
    }

    var villainListEl = document.createElement("li");
    villainListEl.textContent = "Thanos";
    viallainListEl.className = "list-group-item";
    listEl.appendChild(villainListEl);
</script>
*/