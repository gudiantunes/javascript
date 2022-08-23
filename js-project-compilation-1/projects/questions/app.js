const wrapper = document.querySelector('#wrapper');

const expandBtns = [...document.querySelectorAll('.expand-question')];
const questionBodies = [...document.querySelectorAll('.question-body')];

showQuestions()

function expandQuestion(event) {
    const question = event.target.parentElement.parentElement;
    const body = question.querySelector('.question-body');

    let cont = '-';

    if (event.target.textContent === '-') {
        cont = '+';
    }

    expandBtns.forEach((btn) => {
        btn.textContent = '+';
    })

    event.target.textContent = cont;

    questionBodies.forEach((otherBody) => {
        if (otherBody !== body) {
            otherBody.classList.add('hide');
        }
    })
    
    body.classList.toggle('hide');
    
}

async function showQuestions() {
    const questions = await getQuestions();

    for (const question of questions) {
        const questionArticle = document.createElement('article');
        questionArticle.classList.add('question');
        
        const questionHeader = document.createElement('div');
        questionHeader.classList.add('question-header');

        const h3 = document.createElement('h3');
        h3.textContent = question.title;

        const xpd = document.createElement('button');
        xpd.classList.add('expand-question');
        xpd.textContent = '+'
        xpd.addEventListener('click', function(event) {expandQuestion(event)});
        expandBtns.push(xpd);

        const p = document.createElement('p');
        p.classList.add('hide');
        p.classList.add('question-body');
        p.textContent = question.answer;
        questionBodies.push(p);

        questionHeader.append(h3);
        questionHeader.append(xpd);

        questionArticle.append(questionHeader);
        questionArticle.append(p);

        wrapper.append(questionArticle)

    }

}

async function getQuestions() {
    const result = await fetch('./database/questions.json');
    const data = await result.json();
    return data;
}


