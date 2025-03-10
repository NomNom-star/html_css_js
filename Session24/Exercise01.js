let choice;
let arr = [];
do {
    choice = +prompt(`
        1. Nhập mảng 
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
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
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > maxVal) {
                        maxVal = arr[i];
                    }
                }
                let minVal = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] < minVal) {
                        minVal = arr[i];
                    }
                }               
                console.log(`Số lớn nhất: ${maxVal}`);
                console.log(`Số nhỏ nhất: ${minVal}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log(` Tổng các phần tử trong mảng là: ${sum}`);
            break;
        case 5:
            let number = +prompt("Nhập 1 số bất kì:");
            let count = 0;
            if (Number.isInteger(number) == false) {
                console.log("Không hợp lệ");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === number) {
                        count++;
                    } 
                } 
            }
            if (count != 0) {
                console.log(` Số ${number} xuất hiện ${count} lần trong mảng`);
            } else {
                console.log(` Số ${number} không tồn tại trong mảng`);
                
            }
            break;
        case 6:
            for (let i = 0; i < arr.length; i++) {
                for (let j = arr.length-1; j > i; j--) {
                    if (arr[j]<arr[j-1]) {
                        let index = arr[j];
                        arr[j] = arr[j-1];
                        arr[j-1]= index;
                    }
                }
            }
            console.log(` Mảng sau khi đã sắp xếp là: ${arr}`);
            break;
        case 7:
            console.log("Đã thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 7)