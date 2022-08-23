
const sub = document.querySelector('#sub');
const res = document.querySelector('#res');
const add = document.querySelector('#add');

const counter = document.querySelector('#counter');

const save = document.querySelector('#save');
const load = document.querySelector('#load');

let count = 0;

const storage = window.localStorage;

sub.addEventListener('click', () => {
    addNumber(-1);
})

add.addEventListener('click', () => {
    addNumber(1);
})

res.addEventListener('click', () => {
    addNumber(-count);
})

save.addEventListener('click', () => {
    storage.setItem('counter', count);
})

load.addEventListener('click', () => {
    let c = parseInt(storage.getItem('counter'))
    if (c){
        count = 0;
        console.log(typeof(c))
        addNumber(c)
    }
})

function addNumber(num=0) {
    count += num;
    counter.innerText = count;

    if (count > 0) {
        counter.classList.add('positive');
    } else if (count < 0){
        counter.classList.add('negative');
    } else {
        counter.classList.remove('negative');
        counter.classList.remove('positive');
    }
}
