const formElement = document.querySelector('form');
const contentWrapper = document.querySelector('.content-wrapper');

formElement.addEventListener('submit', (event) => {

});


function taskComponent(desc) {
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');
    const statusController = document.createElement('div');
    statusController.classList.add('task-status');
    const para = document.createElement('p');
    para.classList.add('task-para');
    para.textContent = desc;
    const deleteController = document.createElement('button');
    deleteController.classList.add('task-delete');
    deleteController.innerHTML = `<ion-icon name="trash"></ion-icon>`;

    statusController.addEventListener('click', (event) => {
        statusController.classList.toggle('marked');
        para.classList.toggle('strikethrough');
    })

    deleteController.addEventListener('click', (event) => {
        listItem.remove();
    })

    listItem.appendChild(statusController);
    listItem.appendChild(para);
    listItem.appendChild(deleteController);

    return listItem;
}


// contentWrapper.appendChild(taskComponent('Marking in complete will put it back in pending list'));