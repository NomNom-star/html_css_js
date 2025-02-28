let math = +prompt("Nhập điểm toán: ");
let literature = +prompt("Nhập điểm văn: ");
let english = +prompt("Nhập điểm anh: ");
let avg = (math+literature+english) / 3;
if (avg >= 8) {
    alert("Học lực Giỏi!!!");
} else if(avg >= 6.5 && avg <= 7.9){
    alert("Học lực Khá!!!");
} else if(avg >= 5.0 && avg <= 6.4){
    alert("Học lực Trung bình!!!");
} else {
    alert("Học lực Yếu!!!");
}