let choice;
let arr = [];

do {
    choice = +prompt(`
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình
        `);
    switch (choice) {
        case 1:
            let row = +prompt("Nhập số hàng của mảng");
            let col = +prompt("Nhập số cột của mảng");
            for (let i = 0; i < row; i++) {
                arr[i] = [];
                for (let j = 0; j < col; j++) {
                    let num = +prompt(` Nhập phần tử tại arr[[${i}][${j}]]`);
                    arr[i][j] = num; 
                }
            }
            break;
        case 2:
            console.log(arr);   
            break; 
        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                }
            }
            console.log(` Tổng các phần tử trong mảng là: ${sum}`);
            break;
        case 4:
            let maxVal = arr[0][0];
            let maxRow = 0;
            let maxCol = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > maxVal) {
                        maxVal = arr[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            console.log(`Số lớn nhất: ${maxVal}`);
            console.log(`Vị trí: arr[${maxRow}][${maxCol}]`);
            break;
        case 5:
            let rowSum = 0;
            let input = +prompt("Nhập hàng muốn tính trung bình cộng các phần tử");
            for (let j = 0; j < arr[input].length; j++) {
                rowSum += arr[input][j];
            }
            console.log(` Trung bình cộng các phần tử tại hàng có index = ${input} là ${rowSum/arr[input].length}`);
            break;
        case 6:
            for (let i = 0; i < arr.length; i++) {
                arr[i].reverse();
            }
            console.log(arr);
            break;
        case 7:
            console.log("Đã thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 7)