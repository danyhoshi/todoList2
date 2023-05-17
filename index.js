const task = document.querySelector('label');
const checkbox = document.querySelector('input[type=checkbox]');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    task.classList.add('checked');
  } else {
    task.classList.remove('checked');
  }
});