const openMenu = document.querySelector('#open-menu');
const menu = document.querySelector('#responsive-menu');

openMenu.addEventListener('click', () => {
    menu.classList.toggle('hide')
})