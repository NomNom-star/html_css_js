function nhapDanhSachSoNguyen() {
    let soLuong = +prompt("Nhập số lượng số nguyên muốn nhập:");
    let danhSach = [];
    for (let i = 0; i < soLuong; i++) {
        danhSach.push(+prompt(`Nhập số thứ ${i + 1}:`));
    }
    return danhSach;
}

function tinhTrungBinhCong(danhSach) {
    if (danhSach.length === 0) return 0;
    let tong = danhSach.reduce((acc, num) => {
        return acc + num;
    }, 0);
    return tong / danhSach.length;
}

function timSoChanLonNhat(danhSach) {
    let soChan = danhSach.filter((num) => {
        return num % 2 == 0
    });
    if (soChan.length == 0) return null;
    return soChan.reduce((max, num) => {
        return num > max ? num : max;
    }, soChan[0]);
}

function timSoLeNhoNhat(danhSach) {
    let soLe = danhSach.filter(num => num % 2 != 0);
    if (soLe.length == 0) return null;
    return soLe.reduce((min, num) => {
        return num < min ? num : min;
        }, soLe[0]);
}

function menu() {
    let danhSach = [];
    let choice;
    do {
        choice = +prompt("Chọn chức năng:\n1. Nhập danh sách số nguyên\n2. Tính trung bình các số\n3. Tìm số chẵn lớn nhất\n4. Tìm số lẻ nhỏ nhất\n5. Thoát");
        
        switch (choice) {
            case 1:
                danhSach = nhapDanhSachSoNguyen();
                console.log("Danh sách số nguyên:", danhSach);
                break;
            case 2:
                console.log("Trung bình cộng các số:", tinhTrungBinhCong(danhSach));
                break;
            case 3:
                console.log("Số chẵn lớn nhất:", timSoChanLonNhat(danhSach));
                break;
            case 4:
                console.log("Số lẻ nhỏ nhất:", timSoLeNhoNhat(danhSach));
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 5);
}

menu();