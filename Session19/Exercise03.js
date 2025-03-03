let input = +prompt("Nhập 1 để chuyển từ VND=>USD. Nhập 2 để chuyển từ USD=>VND");
let money;
let result ;
switch (input) {
    case 1:
        money = +prompt("Nhập số tiền muốn đổi: ");
        result = money/23000;
        alert(`${result} USD`);
        break;
    case 2:
        money = +prompt("Nhập số tiền muốn đổi: ");
        result = money*23000;
        alert(`${result} VND`);
        break
    default:
        alert("Hãy nhập đúng cú pháp")
        break;
}