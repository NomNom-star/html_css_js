let day = +prompt("Nhập ngày sinh:");
let month = +prompt("Nhập tháng sinh: ");
if (day <= 0 || day > 31 || (month<1 || month>12) || (day > 31 && month==1&& month==3&&month==5&&month==7&&month==8&&month==10&&month==12) || (day>30 && month==4&&month6&&month==9&&month11) || (day > 28 && month==2)) {
    console.log("Vui lòng nhập ngày tháng hợp lệ!");
} else {
    if (day>=21 && month==3 || day <=20 && month==4) {
        console.log("Cung Bạch Dương");
    } else if (day>=21 && month==4 || day<=20 && month==5) {
        console.log("Cung Kim Ngưu"); 
    } else if (day>=21 && month==5  ) {
        
    }
}