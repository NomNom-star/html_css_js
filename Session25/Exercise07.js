function letUpper(str) {
    if (str.length != 0) {
        let lowStr = str.toLowerCase();
        let words = lowStr.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (!words[i] == " ") {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        }
        str = words.join(' ');
        console.log(str);
        return;
    }
    console.log("Chuỗi rỗng");
}
let input = prompt("Nhập chuỗi bất kì");
letUpper(input);
