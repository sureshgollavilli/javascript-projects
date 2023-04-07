var todoForm = document.getElementById('todo-form');
var todoInput = todoForm.querySelector('input');
var todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
	event.preventDefault();
	if (todoInput.value.trim()) {
		addTodoItem(todoInput.value.trim());
		todoInput.value = '';
		todoInput.focus();
	}
});

function addTodoItem(text) {
	var li = document.createElement('li');
	var checkbox = document.createElement('input');
	var task = document.createElement('span');
	var deleteButton = document.createElement('button');

	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';
	task.textContent = text;
	task.className = 'task';
	deleteButton.textContent = 'Delete';
	deleteButton.className = 'delete-button';

	li.appendChild(checkbox);
	li.appendChild(task);
	li.appendChild(deleteButton);

	todoList.appendChild(li);
}

todoList.addEventListener('click', function(event) {
	if (event.target.classList.contains('delete-button')) {
		event.target.parentElement.remove();
	}
});
