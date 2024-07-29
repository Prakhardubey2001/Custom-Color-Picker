const colorPicker = document.getElementById("colorPicker");
const result = document.getElementById("result");
const container = document.getElementById("container");
const outputDiv = document.getElementById("output-div");

function calculateColor() {
    const value = colorPicker.value;
    result.innerHTML = value;
    result.style.color = value;
    container.style.backgroundColor = value;

    if (isDarkColor(value)) {
        container.style.color = "#ffffff";
        outputDiv.style.backgroundColor = "#333333";
        outputDiv.style.color = "#ffffff";
    } else {
        container.style.color = "#000000";
        outputDiv.style.backgroundColor = "#ffffff";
        outputDiv.style.color = "#000000";
    }
}

function isDarkColor(hex) {
    // Convert hex to RGB
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    // Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    // Return true if the color is dark
    return brightness < 128;
}

// Initialize background color based on default hex code
calculateColor();
