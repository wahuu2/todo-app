// Get references to input, button, and list
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");

// Function to create a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }
}

// Event listener for Add Task button
addTaskBtn.addEventListener("click", addTask);

// Event listener for Enter key
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Event delegation for task list
taskList.addEventListener("click", function(event) {
  // Delete button functionality
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
  // Toggle completed task
  else if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent, // task text
      completed: li.classList.contains("completed") // status
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Run when page loads
window.addEventListener("load", loadTasks);
addTaskBtn.addEventListener("click", () => {
  addTask();
  saveTasks();
});

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
    saveTasks();
  }
});

taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
    saveTasks();
  } else if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
    saveTasks();
  }
});
