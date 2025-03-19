function render() {
    let arr = [];
    let text = "";
    for (let i = 0; i < arr.length; i++) {
        text += `<li>${arr[i]}</li>`
    }
    document.getElementsByTagName("ol")[0].innerHTML=text;
}
render();
function add(){
    let name = document.getElementById("text").value;
    arr.push(name);
    render();
    document.getElementById("text").value="";
}