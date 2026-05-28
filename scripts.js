// Get references to input, button, and list
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");

addTaskBtn.addEventListener("click", function() {
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
});

taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
