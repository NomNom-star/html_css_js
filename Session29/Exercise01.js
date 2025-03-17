let contacts = [];
let choice;

do {
    choice = +prompt(`
    1. Thêm đối tượng Contact vào danh sách liên hệ.
    2. Hiển thị danh sách danh bạ.
    3. Tìm kiếm thông tin Contact theo số điện thoại.
    4. Cập nhật thông tin Contact theo ID.
    5. Xóa một đối tượng Contact theo ID.
    6. Thoát.
    Mời bạn chọn: `);

    switch (choice) {
        case 1:
            let id = +prompt("Nhập ID:");
            let name = prompt("Nhập tên:").trim();
            let email = prompt("Nhập email:").trim();
            let phone = prompt("Nhập số điện thoại:").trim();
            addContact(id, name, email, phone);
            break;

        case 2:
            displayContacts();
            break;

        case 3:
            let searchPhone = prompt("Nhập số điện thoại cần tìm:").trim();
            searchContactByPhone(searchPhone);
            break;

        case 4:
            let updateId = +prompt("Nhập ID cần cập nhật:");
            let newName = prompt("Nhập tên mới:").trim();
            let newEmail = prompt("Nhập email mới:").trim();
            let newPhone = prompt("Nhập số điện thoại mới:").trim();
            updateContact(updateId, newName, newEmail, newPhone);
            break;

        case 5:
            let deleteId = +prompt("Nhập ID muốn xóa:");
            deleteContactById(deleteId);
            break;

        case 6:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
} while (choice !== 6);

function addContact(id, name, email, phone) {
    if (!id || !name || !email || !phone) {
        console.log("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (contacts.some(contact => contact.id === id)) {
        console.log("ID đã tồn tại. Vui lòng chọn ID khác.");
        return;
    }

    contacts.push({ id, name, email, phone });
    console.log("Thêm liên hệ thành công!");
}

function displayContacts() {
    if (contacts.length === 0) {
        console.log("Danh bạ trống.");
    } else {
        console.table(contacts);
    }
}

function searchContactByPhone(phone) {
    let found = contacts.filter(contact => contact.phone.includes(phone));
    if (found.length > 0) {
        console.table(found);
    } else {
        console.log("Không tìm thấy liên hệ.");
    }
}

function updateContact(id, newName, newEmail, newPhone) {
    let contact = contacts.find(contact => contact.id === id);
    if (contact) {
        contact.name = newName ;
        contact.email = newEmail;
        contact.phone = newPhone;
        console.log("Cập nhật thành công!");
    } else {
        console.log("Không tìm thấy liên hệ với ID này.");
    }
}
function deleteContactById(id) {
    let index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Xóa liên hệ thành công.");
    } else {
        console.log("Không tìm thấy liên hệ với ID này.");
    }
}
