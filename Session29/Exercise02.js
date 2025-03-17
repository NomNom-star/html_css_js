let products = [];
let choice;
let currentId = 1;

do {
    choice = +prompt(`
    1. Thêm sản phẩm vào danh sách.
    2. Hiển thị tất cả sản phẩm.
    3. Hiển thị chi tiết sản phẩm theo ID.
    4. Cập nhật thông tin sản phẩm theo ID.
    5. Xóa sản phẩm theo ID.
    6. Lọc sản phẩm theo khoảng giá.
    7. Thoát.
    Mời bạn chọn: `);

    switch (choice) {
        case 1:
            let name = prompt("Nhập tên sản phẩm:");
            let price = +prompt("Nhập giá sản phẩm:");
            let category = prompt("Nhập danh mục sản phẩm:");
            let quantity = +prompt("Nhập số lượng:");
            addProduct(name, price, category, quantity);
            break;

        case 2:
            displayAllProducts();
            break;

        case 3:
            let id = +prompt("Nhập ID sản phẩm:");
            displayProductById(id);
            break;

        case 4:
            let updateId = +prompt("Nhập ID sản phẩm muốn cập nhật:");
            let newName = prompt("Nhập tên mới:");
            let newPrice = +prompt("Nhập giá mới:");
            let newCategory = prompt("Nhập danh mục mới:");
            let newQuantity = +prompt("Nhập số lượng mới:");
            updateProductById(updateId, newName, newPrice, newCategory, newQuantity);
            break;

        case 5:
            let deleteId = +prompt("Nhập ID sản phẩm muốn xóa:");
            deleteProductById(deleteId);
            break;

        case 6:
            let minPrice = +prompt("Nhập giá thấp nhất:");
            let maxPrice = +prompt("Nhập giá cao nhất:");
            filterProductsByPriceRange(minPrice, maxPrice);
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
} while (choice !== 7);

function addProduct(name, price, category, quantity) {
    if (!name || price <= 0 || !category || quantity < 0) {
        console.log("Thông tin không hợp lệ! Vui lòng nhập lại.");  
        return;
    }
    const product = { id: currentId++, name, price, category, quantity };
    products.push(product);
    console.log("Sản phẩm đã được thêm thành công!");
}


function displayAllProducts() {
    if (products.length === 0) {
        console.log("Danh sách sản phẩm trống.");
    } else {
        console.table(products);
    }
}

function displayProductById(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        console.table([product]);
    } else {
        console.log(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
}

function updateProductById(id, name, price, category, quantity) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.name = name ;   
        product.price = price ;
        product.category = category ;
        product.quantity = quantity ;
        console.log(`Sản phẩm ID: ${id} đã được cập nhật.`);
    } else {
        console.log(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
}

function deleteProductById(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        console.log(`Sản phẩm ID: ${id} đã được xóa.`);
    } else {
        console.log(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
}

function filterProductsByPriceRange(minPrice, maxPrice) {
    const filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    if (filteredProducts.length > 0) {
        console.table(filteredProducts);
    } else {
        console.log(`Không có sản phẩm nào trong khoảng giá từ ${minPrice} đến ${maxPrice}.`);
    }
}
