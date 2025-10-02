'use strict';

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const activeCountEl = document.getElementById('activeCount');
const completedCountEl = document.getElementById('completedCount');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task) {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    if (task.completed) li.classList.add('completed');

    const span = document.createElement('span');
    span.textContent = task.text;
    li.appendChild(span);

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', () => toggleTask(task.id, li));
    li.appendChild(doneBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(task.id, li));
    li.appendChild(deleteBtn);

    return li;
}

function updateCounts() {
    const completed = tasks.filter(t => t.completed).length;
    const active = tasks.length - completed;
    activeCountEl.textContent = active;
    completedCountEl.textContent = completed;
}

function toggleTask(id, li) {
    const task = tasks.find(t => t.id === id);
    task.completed = !task.completed;
    if (task.completed) li.classList.add('completed');
    else li.classList.remove('completed');
    saveTasks();
    updateCounts();
    applyFilter(currentFilter);
}

function deleteTask(id, li) {
    tasks = tasks.filter(t => t.id !== id);
    li.remove();
    saveTasks();
    updateCounts();
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;
    const task = { id: Date.now(), text, completed: false };
    tasks.push(task);
    const li = renderTask(task);
    if (currentFilter !== 'completed') taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
    updateCounts();
}

function applyFilter(filter) {
    currentFilter = filter;
    Array.from(taskList.children).forEach(li => {
        const task = tasks.find(t => t.id == li.dataset.id);
        if (filter === 'all') li.style.display = '';
        else if (filter === 'active') li.style.display = task.completed ? 'none' : '';
        else if (filter === 'completed') li.style.display = task.completed ? '' : 'none';
    });
}

tasks.forEach(task => {
    const li = renderTask(task);
    taskList.appendChild(li);
});
updateCounts();

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTask();
});

document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});
