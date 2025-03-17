let menu = {};
let choice;

do {
    choice = +prompt(`
    1. Thêm món ăn vào danh mục.
    2. Xóa món ăn theo tên khỏi danh mục.
    3. Cập nhật thông tin món ăn (tên, giá, mô tả).
    4. Hiển thị toàn bộ menu.
    5. Tìm kiếm món ăn theo tên.
    6. Thoát.
    Mời bạn chọn: `);

    switch (choice) {
        case 1:
            let category = prompt("Nhập danh mục:");
            let dishName = prompt("Nhập tên món ăn:");
            let price = +prompt("Nhập giá:");
            let description = prompt("Nhập mô tả món ăn:");
            addDish(category, dishName, price, description);
            break;

        case 2:
            let delCategory = prompt("Nhập danh mục:");
            let delName = prompt("Nhập tên món ăn muốn xóa:");
            removeDish(delCategory, delName);
            break;

        case 3:
            let updateCategory = prompt("Nhập danh mục:");
            let oldName = prompt("Nhập tên món cần cập nhật:");
            let newName = prompt("Nhập tên mới (hoặc bỏ trống):");
            let newPrice = +prompt("Nhập giá mới (hoặc bỏ trống):");
            let newDescription = prompt("Nhập mô tả mới (hoặc bỏ trống):");
            updateDish(updateCategory, oldName, newName, newPrice, newDescription);
            break;

        case 4:
            displayMenu();
            break;

        case 5:
            let searchName = prompt("Nhập tên món ăn cần tìm:");
            searchDish(searchName);
            break;

        case 6:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập lại.");
    }
} while (choice !== 6);

function addDish(category, name, price, description) {
    if (!category || !name || price <= 0) {
        console.log("Thông tin không hợp lệ! Vui lòng nhập lại.");
        return;
    }

    if (!menu[category]) {
        menu[category] = [];
    }
    
    menu[category].push({ name, price, description });
    console.log(`Món ăn "${name}" đã được thêm vào danh mục "${category}".`);
}

function removeDish(category, name) {
    if (menu[category]) {
        let initialLength = menu[category].length;
        menu[category] = menu[category].filter(dish => dish.name !== name);

        if (menu[category].length < initialLength) {
            console.log(`Đã xóa món "${name}" khỏi danh mục "${category}".`);
        } else {
            console.log(`Không tìm thấy món "${name}" trong danh mục "${category}".`);
        }
    } else {
        console.log(`Danh mục "${category}" không tồn tại.`);
    }
}

function updateDish(category, name, newName, newPrice, newDescription) {
    if (menu[category]) {
        for (let dish of menu[category]) {
            if (dish.name === name) {
                dish.name = newName ;
                dish.price = newPrice ;
                dish.description = newDescription ;
                console.log(`Món "${name}" đã được cập nhật.`);
                return;
            }
        }
        console.log(`Không tìm thấy món "${name}" trong danh mục "${category}".`);
    } else {
        console.log(`Danh mục "${category}" không tồn tại.`);
    }
}

function displayMenu() {
    if (Object.keys(menu).length === 0) {
        console.log("Menu hiện tại trống.");
        return;
    }

    console.log("\n MENU HIỆN TẠI:");
    for (let category in menu) {
        console.log(`\n Danh mục: ${category}`);
        console.table(menu[category]);
    }
}

function searchDish(name) {
    for (let category in menu) {
        for (let dish of menu[category]) {
            if (dish.name === name) {
                console.table(dish);
                return;
            }
        }
    }
    console.log(`Không tìm thấy món ăn: ${name}`);
}
