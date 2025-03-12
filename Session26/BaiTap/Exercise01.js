let numbers = [];
function checkNumber(numbers) {
    if (Array.isArray(numbers)) {
        if (numbers.length != 0) {
            let result = numbers.filter((item)=>{
                return item >= 10;
            })
            console.log(result);
        } else {
            console.log("Mảng không có phần tử nào");  
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập giá trị thứ ${i+1}`);
    if (Number.isInteger(num)) {
        numbers.push(num);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
checkNumber(numbers);