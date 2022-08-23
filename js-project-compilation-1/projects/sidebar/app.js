const showBtn = document.querySelector('#show-sidebar');
const sidebar = document.querySelector('#sidebar');

showBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
})