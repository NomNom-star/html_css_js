let year = +prompt("Nhập số năm làm việc:");
if (year<1 && year>0) {
    alert("Mới vào nghề");
} else if(year>=1 && year<=3){
    alert("Nhân viên có kinh nghiệm");
} else if(year>=4 && year<=6){
    alert("Chuyên viên");
} else if(year>6){
    alert("Quản lý");
} else{
    alert("Nhập số năm làm việc hợp lệ!");
}