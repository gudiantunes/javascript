import { reviews } from "./reviewData.js";

const authorImg = document.querySelector('#profile-pic');
const authorJob = document.querySelector('#job');
const reviewTxt = document.querySelector('#review');

const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const randBtn = document.querySelector('#surprise');

let reviewIdx = 0;

function showReview(array, idx) {
    authorImg.setAttribute('src', array[idx].img);
    authorJob.innerText = array[idx].job.toUpperCase();
    reviewTxt.innerText = array[idx].text;
}

showReview(reviews, reviewIdx);

prevBtn.addEventListener('click', () => {
    reviewIdx -= 1;
    if (reviewIdx < 0) {
        reviewIdx = reviews.length - 1
    }
    showReview(reviews, reviewIdx);
})

nextBtn.addEventListener('click', () => {
    reviewIdx += 1;
    if (reviewIdx >= reviews.length) {
        reviewIdx = 0
    }
    showReview(reviews, reviewIdx);
})

randBtn.addEventListener('click', () => {
    reviewIdx = Math.floor(Math.random() * reviews.length);
    showReview(reviews, reviewIdx);
})