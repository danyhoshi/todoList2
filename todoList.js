export class task {
    description;
    state;
    constructor(description) {
        this.description = description;
        this.state = false;
    }
}
export default class todoList {
    tasks;
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    
    removeTask(task) {
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

    getTasks(){
        return this.tasks;
    }

    // removeTask(taskid) {

    // }

}