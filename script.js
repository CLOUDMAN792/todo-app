function addTask() {
  const input = document.getElementById("taskInput");
  const li = document.createElement("li");

  li.textContent = input.value;

  li.onclick = function () {
    li.remove();
  };

  document.getElementById("list").appendChild(li);
  input.value = "";
}