let choice;
let arr = [];
let reverseArr = [];
do {
    choice = +prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
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
            let maxVal = arr[0];
            let maxIndex = 0;
            
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > maxVal) {
                    maxVal = arr[i];
                    maxIndex = i;
                }
            }
            console.log(`Số lớn nhất: ${maxVal}`);
            console.log(`Vị trí: arr[${maxIndex}]`);
            break;
        case 4:
            let sum = 0;
            let count = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count ++;
                }
            }
            if (count == 0) {
                console.log("Không tồn tại số nguyên dương trong mảng");
            } else {
                console.log(` Tổng các số dương trong mảng là: ${sum}`);
                console.log(` Trung bình cộng các số dương trong mảng là: ${sum/count}`);
            }
            break;
        case 5:
            reverseArr = arr.slice().reverse();
            console.log(reverseArr);
            break;
        case 6:
            let flag = true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != reverseArr[i]) {
                    console.log("Mảng không đối xứng");
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                console.log("Mảng đối xứng");
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