const formElement = document.querySelector('form');
const contentWrapper = document.querySelector('.content-wrapper');


const taskArray = [];

formElement.addEventListener('submit', (event) => {
    const userSetTask = event.target.elements.task.value;
    contentWrapper.appendChild(taskComponent(userSetTask))
    taskArray.push(createObject(userSetTask, false));
    event.preventDefault();
    event.target.reset();
});


// Create a event delegation on the contentWrapper container for each taskComponent..
contentWrapper.addEventListener('click', (event) => {
    // console.log(event.target.parentNode)
    if (event.target.classList.contains('task-status')) {
        handleTaskStatus(event.target);
    } 
    if (event.target.closest('.task-delete')) {
        const taskElement = event.target.closest('.task-item');
        handleTaskDeletion(taskElement);
    }
})



// Fuction for creating an object for every user input...
function createObject(value, marked) {
    const taskOjbect = {
        description: value,
        status: marked
    }

    return taskOjbect;
}





// Function component for creating a task component template..
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

    listItem.appendChild(statusController);
    listItem.appendChild(para);
    listItem.appendChild(deleteController);

    return listItem;
}



// Functions for task operations
function handleTaskStatus(statusElement) {
    const paraElement = statusElement.nextElementSibling;
    statusElement.classList.toggle('marked');
    paraElement.classList.toggle('strikethrough');
}

function handleTaskDeletion(taskElement) {
    taskElement.remove();
}



// Trying some tes