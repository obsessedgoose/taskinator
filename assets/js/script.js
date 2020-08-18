var formEl = document.querySelector("#task-form");

formEl.addEventListener("submit", createTaskHandler);

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemE1);
};

