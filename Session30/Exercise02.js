let cart = [];
let bookStore = [
    { id: 1, title: "Book A", price: 100, stock: 10, category: "Category 1" },
    { id: 2, title: "Book B", price: 150, stock: 5, category: "Category 2" },
    { id: 3, title: "Book C", price: 200, stock: 8, category: "Category 1" },
    { id: 4, title: "Book D", price: 250, stock: 3, category: "Category 3" }
];

function main() {
    let choice = 0;
    do {
        choice = +prompt(`
            1. Hiển thị danh sách sách theo thể loại.
            2. Thêm sách mới vào kho.
            3. Tìm kiếm sách theo tên hoặc id.
            4. Mua sách.
            5. Sắp xếp sách theo giá.
            6. Tính tổng số lượng sách đã mua và tổng tiền trong giỏ hàng.
            7. Hiển thị tổng số lượng sách trong kho.
            8. Thoát chương trình.
        `);
        switch (choice) {
            case 1:
                let category = prompt("Nhập thể loại sách cần xem:");
                console.log("Danh sách sách:", getBooksByCategory(category));
                break;
            case 2:
                let bookId = +prompt("Nhập ID sách mới:");
                let bookTitle = prompt("Nhập tên sách:");
                let bookPrice = +prompt("Nhập giá sách:");
                let bookStock = +prompt("Nhập số lượng sách:");
                let bookCategory = prompt("Nhập thể loại:");
                addNewBook(bookId, bookTitle, bookPrice, bookStock, bookCategory);
                break;
            case 3:
                let searchOption = +prompt("Tìm kiếm theo: 1. ID, 2. Tên");
                if (searchOption === 1) {
                    let searchId = +prompt("Nhập ID sách:");
                    console.log("Kết quả:", findBook(searchId));
                } else if (searchOption === 2) {
                    let searchTitle = prompt("Nhập tên sách:");
                    console.log("Kết quả:", findBook(searchTitle));
                }
                break;
            case 4:
                let bookToBuy = +prompt("Nhập ID sách muốn mua:");
                let quantity = +prompt("Nhập số lượng:");
                purchaseBook(bookToBuy, quantity);
                break;
            case 5:
                let sortOrder = +prompt("Chọn: 1. Tăng dần, 2. Giảm dần");
                console.log("Danh sách sách sau khi sắp xếp:", sortBooks(sortOrder === 1));
                break;
            case 6:
                console.log("Tổng số sách đã mua và tổng tiền:", calculateCartTotal());
                break;
            case 7:
                console.log("Tổng số lượng sách trong kho:", getTotalStock());
                break;
            case 8:
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
                break;
        }
    } while (choice !== 8);
}
main();

function getBooksByCategory(category) {
    return bookStore.filter(book => book.category === category);
}

function addNewBook(id, title, price, stock, category) {
    if (bookStore.some(book => book.id === id)) {
        console.log("ID sách đã tồn tại.");
        return;
    }
    bookStore.push({ id, title, price, stock, category });
}

function findBook(query) {
    return bookStore.filter(book => book.title.includes(query) || book.id === query);
}

function purchaseBook(id, quantity) {
    let book = bookStore.find(book => book.id === id);
    if (book && book.stock >= quantity) {
        book.stock -= quantity;
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ id: book.id, title: book.title, price: book.price, quantity });
        }
    } else {
        console.log("Số lượng không đủ hoặc sách không tồn tại.");
    }
}

function sortBooks(ascending = true) {
    return bookStore.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

function calculateCartTotal() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return { totalQuantity, totalPrice };
}

function getTotalStock() {
    return bookStore.reduce((sum, book) => sum + book.stock, 0);
}
