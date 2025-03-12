let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"];
function checkEmail(arr) {
    if (Array.isArray(arr)) {
        if (arr.length != 0) {
            let result = arr.filter((item)=>{
                return item.includes("@") && !item.includes(" ") ;
            })
            console.log(result);
        } else {
            console.log("Mảng không có phần tử nào");  
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
checkEmail(arr);