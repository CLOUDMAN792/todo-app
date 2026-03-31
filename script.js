function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    // ✔️ Complete
    span.onclick = function () {
        span.classList.toggle("completed");
        saveTasks();
    };

    // ✏️ Edit
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.onclick = function () {
        const newText = prompt("Edit task:", span.textContent);
        if (newText) {
            span.textContent = newText;
            saveTasks();
        }
    };

    // ❌ Delete (animated)
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "❌";
    deleteBtn.onclick = function () {
        li.classList.add("remove");

        setTimeout(() => {
            li.remove();
            saveTasks();
        }, 300);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    saveTasks();
}

// Save
function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

// Load
function loadTasks() {
    document.getElementById("taskList").innerHTML =
        localStorage.getItem("tasks") || "";
}

// Clear all
function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
    saveTasks();
}

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Load on start
loadTasks();