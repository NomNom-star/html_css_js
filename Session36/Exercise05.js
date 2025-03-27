document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskName');
    const addButton = document.querySelector('.task-input button');
    const columns = {
        pending: document.getElementById('pendingTasks'),
        inProgress: document.getElementById('inProgressTasks'),
        done: document.getElementById('doneTasks')
    };

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        Object.values(columns).forEach(col => col.innerHTML = '');
        tasks.forEach(task => columns[task.status].appendChild(createTask(task)));
    }

    function saveTasks() {
        const tasks = [];
        Object.entries(columns).forEach(([status, column]) => {
            column.querySelectorAll('.task').forEach(task => {
                const button = task.querySelector('button');
                tasks.push({ text: task.textContent.replace(button ? 'Chuyển tiếp' : '', ''), status });
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function createTask(task) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.textContent = task.text;
        
        if (task.status !== 'done') {
            const moveButton = document.createElement('button');
            moveButton.textContent = 'Chuyển tiếp';
            moveButton.onclick = function () {
                if (task.status === 'pending') {
                    task.status = 'inProgress';
                    columns.inProgress.appendChild(taskDiv);
                } else if (task.status === 'inProgress') {
                    task.status = 'done';
                    columns.done.appendChild(taskDiv);
                    moveButton.remove();
                }
                saveTasks();
            };
            taskDiv.appendChild(moveButton);
        }
        return taskDiv;
    }

    addButton.addEventListener('click', function () {
        if (!taskInput.value.trim()) return;
        const newTask = { text: taskInput.value, status: 'pending' };
        columns.pending.appendChild(createTask(newTask));
        taskInput.value = '';
        saveTasks();
    });

    loadTasks();
});