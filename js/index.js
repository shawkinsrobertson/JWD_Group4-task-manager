//Initialize new task manager
const taskManager = new taskManager(0);

// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');
    
    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    /*
        Validation code here
    */

    /*if (validFormFieldInput(name)) {
        addTask(name, description, assignedTo, dueDate);
    }*/

    //Add task
    taskManager.addTask(name, description,assignedTo, dueDate);

    taskManager.render();

    //clear the values of the inputs after calling addTask
        newTaskNameInput.value = '';
        newTaskDescription.value = '';
        newTaskAssignedTo.value = '';
        newTaskDueDate.value = '';

    

    //validation code error message
    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}

const taskListVar = document.querySelector('#listOfTasks');

listOfTasks.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(prentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';

        taskManager.render();
    }
});