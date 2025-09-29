'use strict';

class HistoryTracker {
    constructor() {
        this.history = [];

        window.addEventListener('popstate', (event) => {
            console.log('Попередній стан історії:', event.state);
            console.log('Вся історія відвіданих URL:', this.history);
            this.renderHistory();
        });
    }

    push(url) {
        history.pushState({ url }, '', url);
        this.history.push(url);
        console.log(`Перехід на ${url}`);
        this.renderHistory();
    }

    back() {
        history.back();
    }

    renderHistory() {
        const list = document.getElementById('historyList');
        list.innerHTML = '';
        this.history.forEach((url, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${url}`;
            list.appendChild(li);
        });
    }
}

const tracker = new HistoryTracker();

document.getElementById('pushPage1').onclick = () => tracker.push('/page1');
document.getElementById('pushPage2').onclick = () => tracker.push('/page2');
document.getElementById('pushPage3').onclick = () => tracker.push('/page3');
document.getElementById('back').onclick = () => tracker.back();
