const tabsContent = [
    'Welcome to the First Tab! This section contains introductory content about our application. Feel free to explore the tabs for more information.',
    'Here in the Second Tab, we dive deeper into advanced features and functionalities. Make sure to read through carefully for tips',
    'Welcome to the Third Tab! This area showcases examples, case studies, or testimonials to give you a better understanding of how others are using our service.',
    'Your\'ve reached the Fourth Tab! This section provides final thoughts, additional resources, and contact information for further queries.'
];

const tabsLink = document.querySelectorAll('.tab-link');
const contentWrapper = document.querySelector('.content-wrapper');
initialTabContent(0); // display the content when we open the page...

tabsLink.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
        contentWrapper.innerHTML = '';
        tabsLink.forEach(item => item.classList.remove('active'));
        tab.classList.toggle('active');
        initialTabContent(index);
    })
})


// generate component for the content wrapper children... 
function initialTabContent(index) {
    const para = document.createElement('p');
    para.textContent = tabsContent[index];
    contentWrapper.appendChild(para);

    return para;
}