let arr = [];
function evenSqr(arr) {
    if (Array.isArray(arr)) {
        if (arr.length != 0) {
            let sqr = arr.map((item)=>{
                return item * item;
            })
            let evenSqr = sqr.filter((item)=>{
                return item%2==0;
            }) 
            console.log(evenSqr);
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
evenSqr(arr);
