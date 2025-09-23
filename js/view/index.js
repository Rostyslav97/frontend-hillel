'use strict';

function TodoView() {
    const todoContainer = document.getElementById('todoItems');

    this.renderTodos = function(todos) {
        todoContainer.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoElement = document.createElement('div');
            todoElement.classList.add('col-12', 'taskWrapper');
            todoElement.innerHTML = `
                <div class="taskHeading">${todo.title}</div>
                <div class="taskDescription">${todo.description}</div>
            `;
            todoContainer.appendChild(todoElement);
        });
    };
}
