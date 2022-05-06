const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
   return `<li class="list-group-item">
                            <div class="card border-danger mb-3" style="max-width: 18rem;">
                            <div class="card-header bg-transparent border-danger font-weight-bold"> ${name} </div>
                            <div class="card-body text-danger">
                                 <p class="card-text"> ${description} </p>
                                 <p class="card-text"> ${assignedTo} </p>
                                 <p class="card-text"> ${dueDate} </p>
                                 <p class="card-text"> ${status} </p>
                            </div>
                            <div class="card-footer bg-transparent border-danger"><button type="button" class="btn btn-primary">▶︎</button>
                            <button type="button" class="btn btn-success">✓</button></div>
                        </li>`;

}

class taskManager {
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

           for (i = 0; i < taskManager.task.length; i ++) {
               let currTask = taskManager.task[i];
               let date = new Date(dueDate);
               let formattedDate = `Due: ${date}`;
           }

           const taskHtml = createTaskHtml(currTask, formattedDate)
           tasksHtmlList.push(taskHtml);

           const tasksHtml = tasksHtmlList.join('\n');
       }
  
}