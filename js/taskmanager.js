const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
   return `<li class="list-group-item" data-task-id=${id}>
                            <div class="card border-danger mb-3" style="max-width: 18rem;">
                            <div class="card-header bg-dark border-danger font-weight-bold"> ${name} </div>
                            <div class="card-body text-danger">
                                 <p class="card-text"> Description: ${description} </p>
                                 <p class="card-text"> Assigned To: ${assignedTo} </p>
                                 <p class="card-text"> Due: ${dueDate} </p>
                                 <p class="card-text"> Status: ${status} </p>
                            </div>
                            <div id="cardButtons">
                            <!--<button type="button" class="btn btn-primary">▶︎</button>-->
                            <button type="button" class="btn btn-success done-button">✓</button>
                            <button type="button" class="btn btn-danger delete-button">X</button></div>
                        </li>`;

}

class TaskManager {
   constructor(currentId = 0) {
       this.task = [];
       this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate){
        const task = {
        id: this.currentId ++,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: 'TODO'
        };

        this.task.push(task);
       }

       render(){
           let tasksHtmlList = [];

           for (let i = 0; i < this.task.length; i ++) {
               let task = this.task[i];
               let date = new Date(task.dueDate);
               let formattedDate = `Due: ${date}`;
           

           const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status, task.id);
           tasksHtmlList.push(taskHtml);
           }

           const tasksHtml = tasksHtmlList.join('\n');

           const taskList = document.querySelector('#listOfTasks');
           taskList.innerHTML = tasksHtml;

          
       }

       save() {
        const tasksJson = JSON.stringify(this.task);
        localStorage.setItem('tasks', tasksJson);

        const currentId = this.currentId;
        localStorage.setItem('currentId', currentId);

 
    }

    getTaskById(taskId) {
        let foundTask;
         for (let i = 0; i < this.task.length; i ++) {
            const task = this.task[i];
            if (task.id === taskId) {
                foundTask = task;

            }
        }
        return foundTask;
    }

    load() {
        if (localStorage.getItem('tasks')) {
       let tasksJson = localStorage.getItem('tasks');

       this.task = JSON.parse(tasksJson);
        }
        if (localStorage.getItem('currentId')) {
       let currentId = localStorage.getItem('currentId');

       this.currentId = Number(currentId);
        }
    }
  
    deleteTask(taskId) {
        let newTasks = [];

        for (let i = 0; i < this.task.length; i ++){
            let task = this.task[i];
            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }
        this.task = newTasks;
    }
}

