// The Ui elements that we will be using in the project..

const accordions = document.querySelectorAll('button');
const accordionArrows = document.querySelectorAll('ion-icon');
const accordionContents = document.querySelectorAll('.question-answer');


accordions.forEach((accordion, index) => {
    accordion.addEventListener('click', (event) => {
        accordions.forEach((item, number) => {
            accordionContents[number].classList.remove('active');
            accordionArrows[number].setAttribute('name', 'chevron-up-outline');
        })
        accordionContents[index].classList.toggle('active');
        accordionArrows[index].setAttribute('name', 'chevron-down-outline');
    })
})