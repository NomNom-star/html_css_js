let input = +prompt("Nhập số để kiểm tra");
if (input%3===0 && input%5===0) {
    alert(`${input} chia hết cho cả 3 và 5`);
} else {
    alert(`${input} không chia hết cho cả 3 và 5`);
}