'use strict';

function createUserInterface() {

    const form = document.querySelector('[data-form]');
    const submitBtn = form.querySelector('[type="submit"]');
    const inputs = Array.from(form.querySelectorAll('input'));
    const listContainer = document.querySelector('.list-group');

    const renderUsers = () => {
        listContainer.innerHTML = '';
        const users = dataBase.getData();

        users.forEach(user => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'justify-content-between');
            li.innerHTML = `
                <div class="text-black"><b>${user.firstName} ${user.lastName}</b> - ${user.phone}</div>
                <button class="btn btn-danger btn-sm">Delete</button>
            `;
            const deleteBtn = li.querySelector('button');
            deleteBtn.addEventListener('click', () => {
                dataBase.deleteData({id: user.id});
                renderUsers();
            });

            listContainer.appendChild(li);
        });
    }

    const disabledHandler = () => {
        const isFilled = inputs.every(input => input.value.trim().length > 0);
        submitBtn.disabled = !isFilled;
    }

    form.addEventListener('input', disabledHandler);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = inputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {});

        dataBase.setData(data);
        form.reset();
        submitBtn.disabled = true;
        renderUsers();
    });

    renderUsers();
}

createUserInterface();
