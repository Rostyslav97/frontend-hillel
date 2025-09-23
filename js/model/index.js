'use strict';

function TodoModel() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];

    this.addTodo = function(todo) {
        this.todos.push(todo);
        this.save();
    };

    this.removeAll = function() {
        this.todos = [];
        this.save();
    };

    this.save = function() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };

    this.getTodos = function() {
        return this.todos;
    };
}
