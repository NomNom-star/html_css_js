let arr = ["apple", "banana", "cat", "elephant", "dog"];
function lengthCheck(arr) {
    if (Array.isArray(arr)){
        if (arr.length != 0) {
            let result = arr.filter((item)=>{
                return item.length > 5;
            })
            console.log(result);
        } else {
            console.log("Mảng không có phần tử nào");  
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
lengthCheck(arr);