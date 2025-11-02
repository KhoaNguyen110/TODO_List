const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

if (taskInput && addBtn && taskList) {
  let tasks = [];

  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "flex flex-wrap justify-between items-start py-2 w-full";

      const text = document.createElement("span");
      text.textContent = task.text;
      text.title = task.text;
      text.className = "flex-1 ml-2 whitespace-normal truncate text-gray-800";
      if (task.done) {
        text.classList.add("line-through", "text-gray-500");
      }

      const markBtn = document.createElement("button");
      markBtn.textContent = task.done ? "🔁 Unmark" : "✅ Mark";
      markBtn.className =
        "text-green-600 hover:text-green-800 cursor-pointer text-xl px-2 py-1 hover:scale-105 transform transition";
      markBtn.onclick = () => toggleMark(index);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.className =
        "text-red-500 hover:text-red-700 cursor-pointer text-xl px-2 py-1 hover:scale-105 transform transition";
      removeBtn.onclick = () => removeTask(index);

      const actionDiv = document.createElement("div");
      actionDiv.className = "flex items-start gap-2 shrink-0";
      actionDiv.append(markBtn, removeBtn);

      li.append(text, actionDiv);
      taskList.appendChild(li);
    });
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;
    tasks.push({ text, done: false });
    taskInput.value = "";
    renderTasks();
  }

  function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  function toggleMark(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
  }

  addBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  renderTasks();
}
