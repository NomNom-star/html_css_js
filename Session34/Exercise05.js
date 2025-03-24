let employees = JSON.parse(localStorage.getItem("employees"));
        
function renderEmployees() {
    let tableContent = "";
    employees.forEach((employee, index) => {
        tableContent += `<tr>
                            <td>${index + 1}</td>
                            <td>${employee.name}</td>
                            <td>${employee.position}</td>
                        </tr>`;
    });
    document.getElementById("employeeList").innerHTML = tableContent;
    localStorage.setItem("employees", JSON.stringify(employees));
}

function addEmployee() {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    
    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    
    employees.push({ name, position });
    renderEmployees();
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
}
renderEmployees();