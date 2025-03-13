function tinhDienTichHinhTron(r) {
    return Math.PI * r * r;
}

function tinhChuViHinhTron(r) {
    return 2 * Math.PI * r;
}

function tinhDienTichHinhChuNhat(dai, rong) {
    return dai * rong;
}

function tinhChuViHinhChuNhat(dai, rong) {
    return 2 * (dai + rong);
}

function menu() {
    let luaChon;
    let dai, rong, r;
    do {
        luaChon = prompt("Chọn chức năng:\n1. Tính diện tích hình tròn\n2. Tính chu vi hình tròn\n3. Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát");
        
        switch (luaChon) {
            case '1':
                r = +prompt("Nhập bán kính hình tròn:");
                console.log("Diện tích hình tròn: " + tinhDienTichHinhTron(r));
                break;
            case '2':
                r = +prompt("Nhập bán kính hình tròn:");
                console.log("Chu vi hình tròn: " + tinhChuViHinhTron(r));
                break;
            case '3':
                dai = +prompt("Nhập chiều dài hình chữ nhật:");
                rong = +prompt("Nhập chiều rộng hình chữ nhật:");
                console.log("Diện tích hình chữ nhật: " + tinhDienTichHinhChuNhat(dai, rong));
                break;
            case '4':
                dai = +prompt("Nhập chiều dài hình chữ nhật:");
                rong = +prompt("Nhập chiều rộng hình chữ nhật:");
                console.log("Chu vi hình chữ nhật: " + tinhChuViHinhChuNhat(dai, rong));
                break;
            case '5':
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (luaChon !== '5');
}

menu();
