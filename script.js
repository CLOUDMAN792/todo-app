function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");

    // 📝 Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // ✔️ Mark as completed
    span.onclick = function () {
        span.classList.toggle("completed");
        saveTasks();
    };

    // ✏️ Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        const newText = prompt("Edit task:", span.textContent);
        if (newText) {
            span.textContent = newText;
            saveTasks();
        }
    };

    // ❌ Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    // 📦 Add everything to list item
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // 📍 Add to list
    document.getElementById("taskList").appendChild(li);

    // 🧹 Clear input
    input.value = "";

    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function loadTasks() {
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
    saveTasks();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// 🚀 Load tasks on page load
loadTasks();