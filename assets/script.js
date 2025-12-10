function replaceAll() {
    let str1 = document.getElementById("txtInput").value;
    console.log(str1);

    let newStr = str1.replaceAll(' ','');
    document.getElementById("txtResult").innerHTML = newStr;

}

function includes() {
    let str2 = document.getElementById("txtInput2").value;
    console.log(str2);

    if (str2.includes('@')) {
        document.getElementById("txtResult2").innerHTML = "The email is valid.";
    } else {
        document.getElementById("txtResult2").innerHTML = "The email is not valid.";
    }
}
