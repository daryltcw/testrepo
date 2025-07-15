let g1;
let g2;
let g3;

function calculateGrocery(){
    g1 = parseFloat(document.getElementById("g1").value);
    g2 = parseFloat(document.getElementById("g2").value);
    g3 = parseFloat(document.getElementById("g3").value);

    let amount = g1 + g2 + g3;
    // document.getElementById("result").innerText = `The total amount is: ${amount}`;
    document.getElementById("result").innerText = "The total amount is: $" + amount;
}