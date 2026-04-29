function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (!text) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  // Toggle complete
  span.onclick = () => {
    span.classList.toggle("completed");
    saveTasks();
  };

  const actions = document.createElement("div");
  actions.className = "actions";

  // Edit
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";

  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText) {
      span.textContent = newText;
      saveTasks();
    }
  };

  // Delete
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
  saveTasks();
}

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

// Load tasks
function loadTasks() {
  document.getElementById("taskList").innerHTML =
    localStorage.getItem("tasks") || "";
}

// Filter
function filterTasks(type) {
  document.querySelectorAll("li").forEach(li => {
    const completed = li.querySelector("span").classList.contains("completed");

    if (type === "all") li.style.display = "flex";
    if (type === "active") li.style.display = !completed ? "flex" : "none";
    if (type === "completed") li.style.display = completed ? "flex" : "none";
  });
}

// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

loadTasks();
