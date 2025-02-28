let year = +prompt("Nhập 1 năm bất kì để kiểm tra năm nhuận:");
if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)) {
    alert(` Năm ${year} là năm nhuận`);
} else if (year < 0) {
    alert("Nhập 1 năm hợp lệ");
} else{
    alert(` Năm ${year} không phải năm nhuận`);
}