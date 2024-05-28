const todoInput = document.querySelector('#todo-input');
const addTaskBtn = document.querySelector('#add-task');
const todoItems = document.querySelector('#todo-items');

const addTask = () => {
  let taskText = todoInput.value;
  if (!taskText) return; // Don't add empty tasks

  let newTaskHTML = `
    <input type="checkbox">
    <p>${taskText}</p>
  `;
  
  todoItems.insertAdjacentHTML('beforeend', newTaskHTML);
  todoInput.value = "";

  // Get the newly added checkbox and paragraph
  let checkbox = todoItems.lastElementChild.previousElementSibling;
  let para = todoItems.lastElementChild;

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      para.style.textDecoration = "line-through";
    } else {
      para.style.textDecoration = "none";
    }
  });

  para.addEventListener('dblclick', () => {
    todoItems.removeChild(para);
    todoItems.removeChild(checkbox); // Remove the checkbox along with the paragraph
  });
}

addTaskBtn.addEventListener('click', addTask);
