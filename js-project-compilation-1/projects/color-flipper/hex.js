const HEX = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#change-color');
const colorName = document.querySelector('#color-name');

btn.addEventListener('click', () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        v = HEX[getrandomNumber()];
        color += v;
    }
    document.body.style.backgroundColor = color
    colorName.innerText = color;
});

function getrandomNumber() {
    return Math.floor(Math.random() * HEX.length);
}