const colorInput = document.getElementById('color-input');
const applyButton = document.getElementById('apply-btn');
const box = document.getElementById('box');

if (!colorInput || !applyButton || !box) {
    console.error('Required DOM elements are missing.');
    console.log('App initialized');
} else {
    applyButton.addEventListener('click', function () {
        const color = colorInput.value.trim();

        if (!color) {
          console.error('Color input is empty.');
          return;
}
        box.style.backgroundColor = color;
    });
}
