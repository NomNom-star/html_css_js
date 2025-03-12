let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
function reverseDate(arr) {
    if (Array.isArray(arr)){
        if (arr.length != 0) {
            let newArr=[];
            for (let i = 0; i < arr.length; i++) {
                let date = arr[i].split("-");
                newArr.push(date);
                newArr[i].reverse();
            }
            let newDate = newArr.map((item)=>{
                return item.join("/");
            })
            console.log(newDate);
        } else {
            console.log("Mảng không có phần tử nào");  
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
reverseDate(arr);




