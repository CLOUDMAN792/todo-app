function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed
    li.onclick = function () {
        li.classList.toggle("completed");
        saveTasks();
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    saveTasks();
}function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function loadTasks() {
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();