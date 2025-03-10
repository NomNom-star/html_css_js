let choice;
let arr = [];
do {
    choice = +prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
        7. Thoát chương trình
        `);
    switch (choice) {
        case 1:
            let input = +prompt("Nhập số lượng phần tử muốn nhập vào mảng");
            if (input <= 0) {
                console.log("Độ dài mảng không hợp lệ");
            } else {
                for (let i = 0; i < input; i++) {
                    let number = +prompt(`arr[${i}]`);
                    arr[i] = number;         
                }
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let evenArr = [];
            let oddArr = [];
            for (let i = 0; i < arr.length; i++) {  
                if (arr[i] % 2 == 0) {    
                    evenArr.push(arr[i]);
                } else {
                    oddArr.push(arr[i]);
                }
            }
            console.log(` Các số chẵn là: ${evenArr}`);
            console.log(` Các số lẻ là: ${oddArr}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log(` Trung bình cộng các phần tử trong mảng là: ${sum/arr.length}`);
            break;
        case 5:
            let pos = +prompt("Nhập vị trí muốn xóa phần tử");
            arr.splice(pos-1, 1);
            break;
        case 6:
            let max1 = arr[0], max2 = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max1) {
                    max2 = max1;
                    max1 = arr[i];
                } else if (arr[i] > max2 && arr[i] !== max1) {
                    max2 = arr[i];
                }
            }
            if (max1 === max2) {
                console.log("Không có số lớn thứ hai");
            } else {
                console.log(` Số lớn thứ 2 của mảng là: ${max2}`);
            }
            break;
        case 7:
            console.log("Đã thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 7)