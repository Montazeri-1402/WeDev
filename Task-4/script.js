const httpReqouest = new XMLHttpRequest();
const operators = ["*", "-", "/", "+"];


function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    if (operators.includes(value)) {
        document.getElementById("result").value += " ";
        document.getElementById("result").value += value;
        document.getElementById("result").value += " ";
    }
    else {
        document.getElementById("result").value += value;
    }
}

function calculate() {
    const p = document.getElementById("result").value;

    const list = p.split(" ");

    let httpRequest = new XMLHttpRequest();

    const url = `http://localhost:8080?num1=${encodeURIComponent(list[0])}&num2=${encodeURIComponent(list[2])}&operation=${encodeURIComponent(list[1])}`;

    httpRequest.open("GET", url, true);
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").value = httpRequest.responseText;
        }
    }

}