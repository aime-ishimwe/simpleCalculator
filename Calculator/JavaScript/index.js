const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error";
    }
}

function clearDisplay() {
    display.value = "";
}

// Event listener for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // allow keyboard input
    if (/\d/.test(key) || ["+", "-", "*", "/"].includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {  // use enter button to caculate
        calculate();
    } else if (key === "Escape") { // use escape button to clear
        clearDisplay();
    } else if (key === ".") {      // use . button to show decimals
        appendToDisplay(key);
    } else if (key === "Backspace") { // use backspace to clear characters
        display.value = display.value.slice(0, -1);
    }
});
