const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

        // Add a new task
        addTaskBtn.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }
            addTask(taskText);
            taskInput.value = '';
        });

        // Function to add a task to the list
        function addTask(taskText) {
            const li = document.createElement('li');

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;

            const actions = document.createElement('div');
            actions.classList.add('actions');

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.classList.add('complete');
            completeBtn.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete');
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });

            actions.appendChild(completeBtn);
            actions.appendChild(deleteBtn);
            li.appendChild(taskContent);
            li.appendChild(actions);

            taskList.appendChild(li);
        }
