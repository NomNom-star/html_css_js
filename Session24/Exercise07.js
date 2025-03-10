let choice;
let str;
do {
    choice = +prompt(`
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi ký tự
        5. Đếm số lượng từ trong chuỗi ký tự
        6. Tìm kiếm và thay thế các ký tự
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
            str = str.trim();
            console.log("Chuỗi sau khi loại bỏ khoảng trắng:", str);
            break;
        case 4:
            let arr = str.split("");
            let reverseArr = arr.slice().reverse(); 
            let reverseStr = reverseArr.join("");
            console.log(` Chuỗi sau khi đảo ngược là :${reverseStr}`);
            break; 
        case 5:
            let wordCount = 0;
            let inWord = false;
            for (let i = 0; i < str.length; i++) {
                if (str[i] !== ' ' && !inWord) {
                    inWord = true;
                    wordCount++;
                } else if (str[i] === ' ') {
                    inWord = false;
                }
            }
            console.log(`Số lượng từ trong chuỗi: ${wordCount}`);
            break;
        case 6:
            let charToFind = prompt("Nhập ký tự muốn tìm");
            if (str.includes(charToFind)) {
                let replacementChar = prompt("Nhập ký tự thay thế");
                let replacedStr = str.split(charToFind).join(replacementChar);
                console.log("Chuỗi sau khi thay thế:", replacedStr);
            } else {
                console.log("Không tìm thấy ký tự trong chuỗi");
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
