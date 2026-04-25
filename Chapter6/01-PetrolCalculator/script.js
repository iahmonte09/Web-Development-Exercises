// Function to calculate total cost
function calculateTotal() {

    // Get input values
    let cost = document.getElementById("cost").value;
    let litres = document.getElementById("litres").value;

    // Convert to numbers
    cost = parseFloat(cost);
    litres = parseFloat(litres);

    // Calculate total
    let total = cost * litres;

    // Display result (2 decimal places)
    document.getElementById("result").textContent =
        "Total: SAR " + total.toFixed(2);
}