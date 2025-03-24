let tasks = [
    { id: 1, content: "Learn Javascript Session 01", dueDate: "2023-04-17", assignedTo: "Anh Bách", status: "Pending" },
    { id: 2, content: "Learn Javascript Session 2", dueDate: "2023-04-17", assignedTo: "Lâm th", status: "Pending" },
    { id: 3, content: "Learn CSS Session 1", dueDate: "2023-04-17", assignedTo: "Hiếu Cí Ớt Ớt", status: "Pending" }
]
function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${task.content}</td>
                <td>${task.dueDate}</td>
                <td>${task.assignedTo}</td>
                <td>${task.status}</td>
                <td class="actions">
                    <button onclick="editTask(${index})">Edit</button>
                    <button onclick="deleteTask(${index})">Delete</button>
                </td>
            </tr>`;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let content = document.getElementById("content").value;
    let dueDate = document.getElementById("dueDate").value;
    let assignedTo = document.getElementById("assignedTo").value;
    let status = document.getElementById("status").value;
    
    if (!content || !dueDate || !assignedTo) {
        alert("All fields are required!");
        return;
    }
    
    tasks.push({ content, dueDate, assignedTo, status });
    renderTasks();
}

function editTask(index) {
    let newContent = prompt("Edit content", tasks[index].content);
    let newDueDate = prompt("Edit due date", tasks[index].dueDate);
    let newAssignedTo = prompt("Edit assigned to", tasks[index].assignedTo);
    let newStatus = prompt("Edit status", tasks[index].status);
    
    if (newContent && newDueDate && newAssignedTo && newStatus) {
        tasks[index] = { content: newContent, dueDate: newDueDate, assignedTo: newAssignedTo, status: newStatus };
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();