// Data structure to store tasks
let tasks = ;

// Function to render task list
function renderTaskList() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        taskElement.appendChild(deleteButton);
        taskListElement.appendChild(taskElement);
    });
}

// Function to add task
function addTask(task) {
    tasks.push(task);
    renderTaskList();
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTaskList();
}

// Event listener for add task button
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInputElement = document.getElementById('task-input');
    const task = taskInputElement.value.trim();

    if (task) {
        addTask(task);
        taskInputElement.value = '';
    }
});

// Initial render
renderTaskList();
