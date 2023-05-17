import todoList from './todoList.js';
import {task} from './todoList.js';

let tdL = new todoList();
const label = document.querySelector('label');
const checkbox = document.querySelector('input[type=checkbox]');
const input = document.querySelector('input[type=text]');

checkbox.addEventListener('change', (e) => {
  let check = e.target;
  console.log(check.checked);
  let tskD = document.querySelector(`label[for='${check.name}']`);
 // console.log(tskD);
  if (check.checked) {
    label.classList.add('checked');
    console.log("Tarea seleccionada: " + tskD.textContent);
  } else {
    label.classList.remove('checked');
  }

});

input.addEventListener('keyup', (e) => {
 // console.log(e.target.value);
  if(e.key == 'Enter') {
    let tsk = new task(e.target.value); //false por defecto
    // console.log('desde tsk: ' + tsk.description);
    // console.log(tsk.description, tsk.state);
    tdL.addTask(tsk);
    let tareas = tdL.getTasks();
    tareas.forEach((element, index) => {
      console.log(element.description, element.state, index);    
  });
}  
});