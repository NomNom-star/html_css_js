let cart = [];
let phones = [
    { id: 1, name: "iPhone 16", price: 12000000, quantity: 10, company: "Apple" },
    { id: 2, name: "Galaxy S25", price: 10000000, quantity: 15, company: "Samsung" },
    { id: 3, name: "XiaoMi 12", price: 5000000, quantity: 20, company: "Xiaomi" }
];

function main() {
    let choice = 0;
    do {
        choice = +prompt(`
            1. Hiển thị danh sách điện thoại theo hãng
            2. Thêm điện thoại mới vào cửa hàng
            3. Tìm kiếm điện thoại theo tên hoặc id
            4. Mua điện thoại
            5. Thanh toán giỏ hàng
            6. Sắp xếp điện thoại theo giá (1. Tăng dần, 2. Giảm dần)
            7. Hiển thị tổng số tiền điện thoại trong kho
            8. Hiển thị tổng số lượng điện thoại theo từng hãng
            9. Thoát chương trình
        `);

        switch (choice) {
            case 1:
                let company = prompt("Nhập hãng điện thoại cần xem (Samsung, Apple, Xiaomi...):");
                console.log("Danh sách điện thoại:", displayPhonesByCompany(company));
                break;
            case 2:
                let newId = +prompt("Nhập ID điện thoại:");
                let newName = prompt("Nhập tên điện thoại:");
                let newPrice = +prompt("Nhập giá điện thoại:");
                let newQuantity = +prompt("Nhập số lượng:");
                let newCompany = prompt("Nhập hãng:");
                addPhone(newId, newName, newPrice, newQuantity, newCompany);
                break;
            case 3:
                let searchOption = +prompt("Tìm kiếm theo: 1. ID, 2. Tên");
                if (searchOption === 1) {
                    let searchId = +prompt("Nhập ID điện thoại:");
                    console.log("Kết quả:", searchPhone(searchId));
                } else if (searchOption === 2) {
                    let searchName = prompt("Nhập tên điện thoại:");
                    console.log("Kết quả:", searchPhone(searchName));
                }
                break;
            case 4:
                let buyId = +prompt("Nhập ID điện thoại muốn mua:");
                let buyQuantity = +prompt("Nhập số lượng:");
                console.log(buyPhone(buyId, buyQuantity));
                break;
            case 5:
                console.log(checkout());
                break;
            case 6:
                let sortOption = +prompt("Chọn: 1. Tăng dần, 2. Giảm dần");
                console.log("Danh sách điện thoại đã sắp xếp:", sortPhonesByPrice(sortOption === 1));
                break;
            case 7:
                console.log(`Tổng giá trị điện thoại trong kho: ${calculateTotalStockValue()} VND`);
                break;
            case 8:
                console.log("Số lượng điện thoại theo hãng:", getPhoneQuantityByCompany());
                break;
            case 9:
                return;
            default:
                console.log("Lựa chọn không hợp lệ.");
                break;
        }
    } while (choice !== 9);
}

main();

function displayPhonesByCompany(company) {
    return phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
}

function addPhone(id, name, price, quantity, company) {
    if (phones.some(phone => phone.id === id)) {
        console.log("ID đã tồn tại!");
        return;
    }
    phones.push({ id, name, price, quantity, company });
}

function searchPhone(query) {
    return phones.filter(phone => phone.name.toLowerCase().includes(query.toLowerCase()) || phone.id === query);
}

function buyPhone(id, quantity) {
    let phone = phones.find(phone => phone.id === id);
    if (phone && phone.quantity >= quantity) {
        phone.quantity -= quantity;
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...phone, quantity });
        }
        return `Đã thêm ${quantity} ${phone.name} vào giỏ hàng.`;
    } else {
        return `Không đủ số lượng ${phone ? phone.name : 'điện thoại'} trong kho.`;
    }
}

function checkout() {
    if (cart.length > 0) {
        cart = [];
        return "Thanh toán thành công! Giỏ hàng đã được xóa.";
    } else {
        return "Giỏ hàng trống.";
    }
}

function sortPhonesByPrice(ascending = true) {
    return [...phones].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

function calculateTotalStockValue() {
    return phones.reduce((total, phone) => total + phone.price * phone.quantity, 0);
}

function getPhoneQuantityByCompany() {
    return phones.reduce((acc, phone) => {
        acc[phone.company] = (acc[phone.company] || 0) + phone.quantity;
        return acc;
    }, {});
}
