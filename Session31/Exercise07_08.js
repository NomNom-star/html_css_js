let todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false }
];
function renderList() {
    const ul = document.getElementById("myUL");
    ul.innerHTML = "";
    
    todoList.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.task;
        if (item.completed){
            li.classList.add("checked");
        };
        ul.appendChild(li);
    });
}

document.getElementsByClassName("addBtn")[0].addEventListener("click", () => {
    let input = document.getElementById("myInput");
    let task = input.value.trim();
    if (task) {
        todoList.push({ id: todoList.length++, task, completed: false });
        input.value = "";
        renderList();
    }
});
  renderList();
