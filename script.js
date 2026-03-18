const colorInput = document.getElementById('color-input');
const applyButton = document.getElementById('apply-btn');
const box = document.getElementById('box');

function applyColor(color) {
    box.style.backgroundColor = color;
}

function hasEmptyColorInput(color) {
    return !color;
}

applyButton.addEventListener('click', function () {
    const color = colorInput.value.trim();

    if (hasEmptyColorInput(color)) {
        console.error('Color input is empty.');
        return;
    }

    applyColor(color);
});