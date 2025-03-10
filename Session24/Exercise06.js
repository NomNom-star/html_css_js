let choice;
let str;
do {
    choice = +prompt(`
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        7. Thoát chương trình
        `);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi bất kì");
            break;
        case 2:
            console.log(str);
            break; 
        case 3:
            console.log(` Độ dài của chuỗi đã nhập là: ${str.length}`);
            break;
        case 4:
            let input = prompt("Nhập kí tự muốn tìm");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (input == str[i]) {
                    count++;
                }
            }
            if (count == 0) {
                console.log("Kí tự không xuất hiện trong chuỗi");                
            } else {
                console.log(` Kí tự ${input} xuất hiện ${count} lần `);
            }
            break;
        case 5:
            let arr = str.split("");
            let reverseArr = arr.slice().reverse(); 
            let flag = true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != reverseArr[i]) {
                    console.log("Chuỗi không đối xứng");
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                console.log("Chuỗi đối xứng");
            }
            break;
        case 6:
            let words = str.split(' ');
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            str = words.join(' ');
            console.log("Chuỗi sau khi chuyển đổi:", str);    
            break;
        case 7:
            console.log("Đã thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 7)