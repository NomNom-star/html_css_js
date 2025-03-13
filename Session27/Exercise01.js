function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}

function calculatorMenu() {
    let choice;
    do {
        choice = +prompt("Chọn chức năng:\n1. Cộng\n2. Trừ\n3. Nhân\n4. Chia\n5. Thoát");
        let num1, num2, result;      
        switch (choice) {
            case 1:
                num1 = +prompt("Nhập số thứ nhất: ");
                num2 = +prompt("Nhập số thứ hai: ");
                result = add(num1, num2);
                console.log("Kết quả: " + result);
                break;
            case 2:
                num1 = +prompt("Nhập số thứ nhất: ");
                num2 = +prompt("Nhập số thứ hai: ");
                result = subtract(num1, num2);
                console.log("Kết quả: " + result);
                break;
            case 3:
                num1 = +prompt("Nhập số thứ nhất: ");
                num2 = +prompt("Nhập số thứ hai: ");
                result = multiply(num1, num2);
                console.log("Kết quả: " + result);
                break;
            case 4:
                num1 = +prompt("Nhập số thứ nhất: ");
                num2 = +prompt("Nhập số thứ hai: ");
                result = divide(num1, num2);
                console.log("Kết quả: " + result);
                break;
            case 5:
                console.log("Thoát chương trình!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice != 5);
}

calculatorMenu();