function performOperation() {
    // Get user input from input fields
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;

    // Intentional character assignment to test debugger behavior
    let charTest = 'A';
    debugger; // Pause to observe 'charTest' and input values

    // Convert inputs to integers
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform operations
        let addition = num1 + num2;
        let multiplication = num1 * num2;
        let division = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by zero';

        // Call function to display results
        displayResult(addition, multiplication, division);
    } else {
        displayResult('Invalid', 'Invalid', 'Invalid');
    }
}

function displayResult(add, mul, div) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <strong>Addition:</strong> ${add}<br>
        <strong>Multiplication:</strong> ${mul}<br>
        <strong>Division:</strong> ${div}
    `;
}