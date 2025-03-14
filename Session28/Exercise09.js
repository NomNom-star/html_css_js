let books = [];
while (true) {
    let choice = +prompt(`
        1. Thêm sách mới.
        2. Hiển thị danh sách sách.
        3. Tìm kiếm sách theo tiêu đề.
        4. Cập nhật trạng thái mượn/trả sách theo ID.
        5. Xóa sách theo ID.
        6. Sắp xếp sách theo giá tăng dần.
        7. Thoát.
    `);

    switch (choice) {
        case 1:
            addBook();
            break;
        case 2:
            displayBooks();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            updateBookStatus();
            break;
        case 5:
            deleteBook();
            break;
        case 6:
            sortBooksByPrice();
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }

    if (choice === 7) {
        break;
    }
}

function addBook() {
    let id = Math.floor(Math.random() * 1000000); 
    let title = prompt("Nhập tên sách:");
    let author = prompt("Nhập tên tác giả:");
    let year = +prompt("Nhập năm xuất bản:");
    let price = +prompt("Nhập giá sách:");
    let isAvailable = true; 

    let book = {
        id: id,
        title: title,
        author: author,
        year: year,
        price: price,
        isAvailable: isAvailable
    };

    books.push(book);
    console.log("Thêm sách thành công!", books);
}
function displayBooks() {
    if (books.length === 0) {
        console.log("Danh sách sách trống.");
    } else {
        console.log("Danh sách sách trong thư viện:");
        books.forEach(book => {
            console.log(
                `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm XB: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`
            );
        });
    }
}
function searchBook() {
    let searchTitle = prompt("Nhập tên sách cần tìm:");
    let foundBooks = books.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()));

    if (foundBooks.length > 0) {
        console.log("Danh sách sách tìm thấy:");
        foundBooks.forEach(book => {
            console.log(
                `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm XB: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`
            );
        });
    } else {
        console.log("Không tìm thấy sách.");
    }
}
function updateBookStatus() {
    let id = +prompt("Nhập ID sách cần cập nhật trạng thái:");
    let book = books.find(book => book.id === id);

    if (book) {
        book.isAvailable = !book.isAvailable;
        console.log(`Cập nhật trạng thái sách thành công! Sách hiện tại: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
    } else {
        console.log("Không tìm thấy sách với ID này.");
    }
}
function deleteBook() {
    let id = +prompt("Nhập ID sách cần xóa:");
    let index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sách này?");
        if (confirmDelete) {
            books.splice(index, 1);
            console.log("Xóa sách thành công!");
        }
    } else {
        console.log("Không tìm thấy sách với ID này.");
    }
}
function sortBooksByPrice() {
    if (books.length === 0) {
        console.log("Danh sách sách trống.");
    } else {
        books.sort((a, b) => a.price - b.price);
        console.log("Danh sách sách sau khi sắp xếp theo giá tăng dần:");
        displayBooks();
    }
}
