let month = +prompt("Nhập tháng để kiếm tra");
switch (month) {
    case 1,2,3:
        alert("Mùa Xuân");
        break;
    case 4,5,6:
        alert("Mùa Hạ");
        break;
    case 7,8,9:
        alert("Mùa Thu");
        break;
    case 10,11,12:
        alert("Mùa Đông");
        break;
    default:
        alert("Tháng không hợp lệ");
        break;
}