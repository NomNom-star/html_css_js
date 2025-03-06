let arr = [];
let choice
do {
    console.log("1.Nhập vào mảng");
    console.log("2.Hiển thị mảng");
    console.log("3.Thêm phần tử");
    console.log("4.Sửa phần tử");
    console.log("5.Xóa phần tử");
    console.log("6.Thoát");
    choice= +prompt("Nhập lựa chọn của bạn");
    switch (choice) {
        case 1:
            let input = +prompt("Nhập số lượng phần tử muốn nhập vào mảng");
            for (let i = 0; i < input; i++) {
                let number = +prompt(`arr[${i}]`);
                arr[i] = number;         
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let newElement = +prompt("Nhập phần tử muốn thêm: ");
            arr.push(newElement);
            console.log("Đã thêm phần tử.");
            break;
        case 4:
            let index = +prompt("Nhập vị trí muốn sửa: ") - 1;
            if (index >= 0 && index < arr.length) {
                let newElement = +prompt("Nhập giá trị mới: ");
                arr[index] = newElement;
                console.log("Đã sửa phần tử.");
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;
        case 5:
            let index1 = +prompt("Nhập vị trí muốn xóa: ") - 1;
            if (index1 >= 0 && index1 < arr.length) {
                arr.splice(index1, 1);
                console.log("Đã xóa phần tử.");
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;
        case 6 :
            console.log("Đã Thoát");
            
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice!= 6)

