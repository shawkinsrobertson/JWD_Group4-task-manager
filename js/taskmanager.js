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