let h = +prompt("Nhập giờ(0-23): ");
let m = +prompt("Nhập phút(0-59): ");
let s = +prompt("Nhập giây(0-59): ");
if (h<0 || h>23 || m<0 || m>59 || s<0 || s>59) {
    alert("Giờ nhập vào không hợp lệ!")
} else {
    if (h==12) {
        alert(` ${h}:${m}:${s} PM`);
    } else if (h>12) {
        h = h%12;
        alert(` ${h}:${m}:${s} PM`);
    } else {
        alert(` ${h}:${m}:${s} AM`);
    }
}