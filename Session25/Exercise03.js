function checkEven(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mảng không chứa phần tử");
            return;
        }
        let evenArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                evenArr.push(arr[i]);
            }
        }
        if (evenArr.length == 0) {
            console.log("Mảng không chứa số chẵn");
            return;
        }
        console.log(evenArr); 
        return evenArr;
    }
    console.log("Dữ liệu không hợp lệ");
}
checkEven([1,3,4,6]);
