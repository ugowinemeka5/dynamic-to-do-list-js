document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // ✅ Load saved tasks from localStorage when the page loads
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(taskText => addTaskToDOM(taskText));

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    addTaskToDOM(taskText);
    saveTask(taskText);
    taskInput.value = '';
  }

  // Function to add task to the DOM
  function addTaskToDOM(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = function() {
      li.remove();
      removeTask(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // ✅ Save task to localStorage
  function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // ✅ Remove task from localStorage
  function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Add event listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
