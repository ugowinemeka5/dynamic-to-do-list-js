// Wait until the whole page is loaded before running the code
document.addEventListener('DOMContentLoaded', function() {
    // Select the main elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item and remove button
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Remove task when the remove button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(li);
            saveTasks(); // Update localStorage after removing
        };

        // Append elements
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = "";

        // Save updated list to localStorage
        saveTasks();
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(function(li) {
            // Get only the text, not the button
            const text = li.firstChild.textContent;
            tasks.push(text);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(function(taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            removeButton.onclick = function() {
                taskList.removeChild(li);
                saveTasks();
            };

            li.appendChild(removeButton);
            taskList.appendChild(li);
        });
    }

    // Event listeners for adding tasks
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when page starts
    loadTasks();
});
