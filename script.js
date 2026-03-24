let num1 = 0;
let num2 = 0;
let num3 = 0;

function calc() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);

    function x1() {
        x1 = (- num2 - Math.sqrt((num2 ** 2) - (4 * (num1 * num3)))) / (2 * num1);
        return x1;
    }

        function x2() {
        x2 = (- num2 + Math.sqrt((num2 ** 2) - (4 * (num1 * num3)))) / (2 * num1);
        return x2;
    }

    document.write(`x1: ${x1()} <br></br>`);
    document.write(`x2: ${x2()} <br></br>`);
}