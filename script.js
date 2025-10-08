// Get the input, button, and list elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add event listener to the Add Task button
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        // Add remove button functionality
        removeBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        // Add button to the list item
        li.appendChild(removeBtn);

        // Add the new list item to the list
        taskList.appendChild(li);

        // Clear the input box
        taskInput.value = "";
    } else {
        alert("Please enter a task before adding!");
    }
});
