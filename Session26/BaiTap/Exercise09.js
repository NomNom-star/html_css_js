let arr = [];
function findOdd(arr) {
    if (Array.isArray(arr)) {
        if (arr.length != 0) {
            let oddArr = arr.filter((item)=>{
                return item % 2 != 0;
            })
            let totalOdd = oddArr.reduce((acc, item)=>{
                return acc + item;
            },0)
            let evenArr = arr.filter((item)=>{
                return item % 2 == 0;
            })
            let totalEven = evenArr.reduce((acc, item)=>{
                return acc + item;
            },0)
            console.log(`TotalEven = ${totalEven}`);
            console.log(`TotalOdd = ${totalOdd}`);
        }else{
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
findOdd(arr);