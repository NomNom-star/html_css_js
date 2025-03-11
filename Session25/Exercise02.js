function sum(a, b) {
    if ( Number.isInteger(a) && Number.isInteger(b)){
        return a + b;
    }
    console.log("Dữ liệu không hợp lệ");
    return;
}
console.log(sum(5,3));
