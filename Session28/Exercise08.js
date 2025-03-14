let employees=[];
while (true) {
    let choice = +prompt(`
        1.Thêm nhân viên mới.
        2.Xóa nhân viên theo id.
            Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
            Không tìm thấy nhân viên có id thì hiển thị thông báo.
        3.Cập nhật mức lương của nhân viên theo id
        4.Tìm kiếm nhân viên theo tên.
        5.Thoát
        `);
    switch (choice) {
        case 1:
            addNewEmployee();
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            searchEmployee();
            break;
        default:
            break;
    }
    if (choice == 5 ) {
        break;
    }
}
function addNewEmployee() {
    let name = prompt("Nhập tên");
    let position = prompt("Nhập vị trí công việc");
    let salary = prompt("Nhập lương");
    let id = Math.floor(Math.random()*21313452);
    let employee = {
        id: id,
        name: name,
        salary: salary,
        position: position,
    }
    employees.push(employee);
    console.log("Thêm nhân viên thành công", employees);
}
function deleteEmployee() {
    let id = +prompt("Nhập Id nhân viên muốn xóa");
    let findIndex = employees.findIndex(item => item.id == id);
    if (findIndex != -1) {
        let confirmDelete = confirm("Bạn có muốn xóa hay không");
        if (confirmDelete) {
            employees.splice(findIndex,1);
            console.log("Xóa nhân viên thành công!");
            
        }
    } else {
        console.log("Không tìm thấy nhân viên");
    }
}
function updateSalary() {
    let id = +prompt("Nhập ID nhân viên cần cập nhật lương:");
    let employee = employees.find(item => item.id === id);
    
    if (employee) {
        let newSalary = +prompt("Nhập mức lương mới:");
        employee.salary = newSalary;
        console.log("Cập nhật lương thành công!", employee);
    } else {
        console.log("Không tìm thấy nhân viên.");
    }
}
function searchEmployee() {
    let searchName = prompt("Nhập tên nhân viên cần tìm:");
    let foundEmployees = employees.filter((item) => {
        return item.name.toLowerCase().includes(searchName.toLowerCase());
    });
    if (foundEmployees.length > 0) {
        console.log("Danh sách nhân viên tìm thấy:", foundEmployees);
    } else {
        console.log("Không tìm thấy nhân viên.");
    }
}