const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    <li class="list-group-item">
                            <div class="card border-danger mb-3" style="max-width: 18rem;">
                            <div class="card-header bg-transparent border-danger font-weight-bold">Task Name</div>
                            <div class="card-body text-danger">
                                 <p class="card-text">Description</p>
                                 <p class="card-text">Assigned to:</p>
                                 <p class="card-text">Due Date:</p>
                            </div>
                            <div class="card-footer bg-transparent border-danger"><button type="button" class="btn btn-primary">▶︎</button>
                            <button type="button" class="btn btn-success">✓</button></div>
                        </li>
}

class taskManager {
   constructor(task, currentId) {
       this.task = [];
       this.currentId = 0;
    }

    addTask(name, description, assignedTo, dueDate){
        let status = 'TODO';
        this.currentId ++;
        this.task.push(this.currentId, name, description, assignedTo, dueDate, status);
       }
  
}