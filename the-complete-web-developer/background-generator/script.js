let body = document.getElementById('gradient');
let input1 = document.getElementById('color1');
let input2 = document.getElementById('color2');
let style_display = document.getElementById('style-display');


function setColorGradient() {
    color1 = input1.value;
    color2 = input2.value;
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    style_display.textContent = body.style.background + ";";
}


input1.addEventListener('input', setColorGradient);


input2.addEventListener('input', setColorGradient);