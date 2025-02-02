function selectRandom() {
    // Get the input values
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    // Check if both inputs are filled
    if (input1 && input2) {
        // Randomly pick one of the inputs
        const randomChoice = Math.random() < 0.5 ? input1 : input2;
        
        // Display the result
        document.getElementById('result').textContent = `Randomly selected: ${randomChoice}`;
    } else {
        // If inputs are not filled, show an error message
        document.getElementById('result').textContent = "Please fill both inputs.";
    }
}
