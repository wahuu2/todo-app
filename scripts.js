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
