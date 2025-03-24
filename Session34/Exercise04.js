let todoItems = JSON.parse(localStorage.getItem("todoItems"));

function renderTodos() {
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    todoItems.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTodo(index);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo() {
    let todoInput = document.getElementById("todoInput").value;
    if (todoInput.trim()) {
        todoItems.push(todoInput);
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
        renderTodos();
        document.getElementById("todoInput").value = "";
    }
}

function deleteTodo(index) {
    todoItems.splice(index, 1);
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    renderTodos();
}

renderTodos();