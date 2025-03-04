let str = prompt("Nhập chuỗi:");
let search = prompt("Nhập kí tự cần tìm");
let len = str.length;
if ( len == 0) {
    console.log("Vui lòng nhập vào 1 chuỗi hợp lệ");
} else {
    let flag = 0;
    for (let i = 0; i < len; i++) {
        if (str[i] == search) {
            console.log("Tồn tại kí tự cần tìm kiếm");
            flag = 1;
            break;
        }
    }
    if (flag==0) {
        console.log("Không tồn tại kí tự cần tìm kiếm");
    }
}