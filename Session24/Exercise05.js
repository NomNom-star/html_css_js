let choice;
let arr = [];

do {
    choice = +prompt(`
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
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
            let sum2 = 0;
            if (arr.length != arr[0].length) {
                console.log("Mảng không có đường chéo chính");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        if (i == j) {
                            sum2 += arr[i][j]; 
                        }
                    }
                }
                console.log(` Tổng các số trên đường chéo chính là ${sum2}`);           
            }
            break;
        case 5:
            let sum3 = 0;
            if (arr.length != arr[0].length) {
                console.log("Mảng không có đường chéo phụ");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        if (j == arr.length-1-i) {
                            sum3 += arr[i][j];
                        }
                    }
                }
                console.log(` Tổng các số trên đường chéo phụ là ${sum3}`);           
            }
            break;
        case 6:
            let input = +prompt(`
                1. Tính trung bình tổng của 1 hàng
                2.Tính trung bình tổng của 1 cột`);
            let avg;
            switch (input) {
                case 1:
                    let row = +prompt("Nhập vị trí index hàng muốn tính trung bình tổng")
                    let rowSum = 0;
                    for (let j = 0; j < arr[row].length; j++) {
                        rowSum += arr[row][j];
                    }
                    avg = rowSum / arr[row].length
                    console.log(`Trung bình tổng của hàng với index = ${row} là ${avg}`);
                    break;
                case 2:
                    let col = +prompt("Nhập vị trí index cột muốn tính trung bình tổng")
                    let colSum = 0;
                    for (let i = 0; i < arr.length; i++) {
                        colSum += arr[i][col];
                    }
                    avg = colSum / arr[col].length
                    console.log(`Trung bình tổng của hàng với index = ${col} là ${avg}`);
                    break;
                default:
                    console.log("Không hợp lệ");
                    break;
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