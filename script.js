const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");

    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = "";

});