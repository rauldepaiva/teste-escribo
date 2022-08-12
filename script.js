function Calculate() {
    let num = document.getElementById("num").value;
    const resultText = document.getElementById("result");
    let result = 0;
    for (let i = 3; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
            result += i;
        }
    }

    resultText.innerHTML = result;
}