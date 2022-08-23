const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#change-color');
const colorName = document.querySelector('#color-name');

btn.addEventListener('click', () => {
    const color = colors[getrandomNumber()];
    document.body.style.backgroundColor = color
    colorName.innerText = color;
});

function getrandomNumber() {
    return Math.floor(Math.random() * colors.length);
}