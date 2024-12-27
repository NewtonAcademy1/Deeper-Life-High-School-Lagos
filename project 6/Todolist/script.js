const taskInput = document.getElementById('textinput')
const addTaskButton = document.getElementById('addTaskButton')
const todoList = document.getElementById('todoList')


let draggedItem = null
function createTask(taskText) {

    const taskItem = document.createElement('li');
    taskItem.classList.add('todo-Item')
    taskItem.setAttribute('draggable',true)

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    // Created the delete button
    const deletebutton = document.createElement('button')
    deletebutton.textContent = 'delete'
    deletebutton.classList.add('delete-button')
    taskItem.appendChild(deletebutton);

    //Mark the task as completed
    taskContent.addEventListener('click', function(){
        taskContent.classList.toggle('completed');
    })

    // Remove the task when the delete button is clicked
    deletebutton.addEventListener('click',function() {
        todoList.removeChild(taskItem);
    })


    // Drag and Drop feature
    taskItem.addEventListener('dragstart', function(){
        draggedItem = taskItem;
        setTimeout(() => {
            taskItem.style.display = 'none';
        }, 0);
    });
 
    taskItem.addEventListener('dragend', function(){
       setTimeout(() => {
            taskItem.style.display = 'flex';
            draggedItem = null;
       }, 0);
    });

    taskItem.addEventListener("dragover", function(e){
        e.preventDefault();
   });

   taskItem.addEventListener('dragenter', function(e){
        e.preventDefault();
        this.style.transform= 'scale(1.05)';
    });

    taskItem.addEventListener('dragleave', () => {
        this.style.transform = 'scale(1)';
    });

    taskItem.addEventListener("drop", function(){
        this.style.transform= 'scale(1)';``
        if (this !== draggedItem) {
            todoList.insertBefore(draggedItem, this)
        }
    })

    todoList.appendChild(taskItem)
}

addTaskButton.addEventListener('click',function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        createTask(taskText);
    } else {
        alert("Please enter a task");
    }
});

 // Allow dropping into the list
todoList.addEventListener('dragover', (e) => {
    e.preventDefault();
});