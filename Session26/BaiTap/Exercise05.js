let arr = [];
function findMax(arr) {
    if (Array.isArray(arr)){
        if (arr.length != 0) {
            let result = arr.reduce((acc, item)=>{
                return item > acc ? item : acc
            }, arr[0])
            let pos = arr.indexOf(result);
            console.log(`Max = ${result} \nposition: ${pos}`);
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
        arr.push(num);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
findMax(arr);