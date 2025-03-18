let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "Món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "Món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "Món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "Món ăn dân tộc Kinh" },
];

let cart = [];

function main() {
    let choice;
    do {
        choice = +prompt(`
            1. Hiển thị sản phẩm theo danh mục
            2. Chọn sản phẩm để mua
            3. Sắp xếp sản phẩm theo giá
            4. Hiển thị giỏ hàng & tính tổng tiền
            5. Thoát
        `);

        switch (choice) {
            case 1:
                let categoryChoice = +prompt(`1. Món ăn dân tộc Mông\n2. Món ăn dân tộc Kinh`);
                let categoryName = categoryChoice === 1 ? "Món ăn dân tộc Mông" : categoryChoice === 2 ? "Món ăn dân tộc Kinh" : null;
                if (categoryName) {
                    displayProductsByCategory(categoryName);
                } else {
                    console.log("Lựa chọn không hợp lệ!");
                }
                break;

            case 2:
                let id = +prompt("Nhập ID sản phẩm muốn mua:");
                let amount = +prompt("Nhập số lượng muốn mua:");

                if (amount <= 0) {
                    console.log("Số lượng phải lớn hơn 0!");
                    break;
                }

                let selectedProduct = selectProduct(products, id);
                if (selectedProduct) {
                    let totalPrice = purchaseProduct(selectedProduct, amount);
                    if (totalPrice > 0) {
                        let cartItem = cart.find(item => item.productId === id);
                        if (cartItem) {
                            cartItem.quantity += amount;
                            cartItem.totalPrice += totalPrice;
                        } else {
                            cart.push({ productId: id, quantity: amount, totalPrice: totalPrice });
                        }
                    }
                }
                break;

            case 3:
                let sortChoice = +prompt("1. Sắp xếp tăng dần\n2. Sắp xếp giảm dần");
                if (sortChoice === 1 || sortChoice === 2) {
                    displayProducts(sortProductsByPrice(products, sortChoice === 1));
                } else {
                    console.log("Lựa chọn không hợp lệ!");
                }
                break;

            case 4:
                if (cart.length === 0) {
                    console.log("Giỏ hàng đang trống.");
                } else {
                    console.log("Giỏ hàng:");
                    cart.forEach(item => {
                        let product = products.find(p => p.id === item.productId);
                        console.log(`Tên: ${product.name}, Số lượng: ${item.quantity}, Thành tiền: ${item.totalPrice}`);
                    });
                    console.log("Tổng tiền thanh toán:", calculateTotal(cart));
                }
                break;

            case 5:
                console.log("Thoát chương trình.");
                return;

            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (true);
}

function displayProductsByCategory(categoryName) {
    let filteredProducts = products.filter(product => product.category === categoryName);
    if (filteredProducts.length > 0) {
        console.log(`Sản phẩm trong danh mục ${categoryName}:`);
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}`);
        });
    } else {
        console.log("Không tìm thấy sản phẩm nào.");
    }
}

function displayProducts(products) {
    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}`);
    });
}

function selectProduct(products, productId) {
    let product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng.");
        return null;
    }
    return product;
}

function purchaseProduct(product, quantity) {
    if (product.quantity >= quantity) {
        product.quantity -= quantity;
        console.log(`Mua thành công! Sản phẩm ${product.name} còn lại: ${product.quantity}`);
        return product.price * quantity;
    } else {
        console.log(`Không đủ hàng! Chỉ còn ${product.quantity} sản phẩm.`);
        return 0;
    }
}

function sortProductsByPrice(products, ascending) {
    return [...products].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
}

main();
