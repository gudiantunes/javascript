const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');

const modalBG = document.querySelector('#modal-background');

openModal.addEventListener('click', () => {
    modalBG.classList.remove('hide');
});

closeModal.addEventListener('click', () => {
    modalBG.classList.add('hide');
});