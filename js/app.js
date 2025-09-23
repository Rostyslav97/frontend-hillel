'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const model = new TodoModel();
    const view = new TodoView();
    const controller = new TodoController(model, view);
    controller.init();
});
