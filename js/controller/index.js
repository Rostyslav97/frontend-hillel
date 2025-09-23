'use strict';

function TodoController(model, view) {
    this.model = model;
    this.view = view;

    const form = document.getElementById('todoForm');
    const removeAllBtn = document.querySelector('.remove-all');

    const self = this;

    this.init = function() {
        self.view.renderTodos(self.model.getTodos());
        form.addEventListener('submit', self.handleAddTodo.bind(self));
        removeAllBtn.addEventListener('click', self.handleRemoveAll.bind(self));
    };

    this.handleAddTodo = function(e) {
        e.preventDefault();
        const title = form.title.value.trim();
        const description = form.description.value.trim();

        if (!title || !description) return;

        const todo = {
            title,
            description
        };

        this.model.addTodo(todo);
        this.view.renderTodos(this.model.getTodos());
        form.reset();
    };

    this.handleRemoveAll = function() {
        this.model.removeAll();
        this.view.renderTodos(this.model.getTodos());
    };
}
