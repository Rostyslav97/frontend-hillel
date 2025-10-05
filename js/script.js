'use strict';

function createBus() {
    const topics = Object.create(null);

    function on(topic, handler) {
        if (!topics[topic]) {
            topics[topic] = new Set();
        }
        topics[topic].add(handler);

        return function unsubscribe() {
            off(topic, handler);
        };
    }

    function off(topic, handler) {
        const handlers = topics[topic];
        if (!handlers) return;

        handlers.delete(handler);

        if (handlers.size === 0) {
            delete topics[topic];
        }
    }

    function emit(topic, payload, delay = 0) {
        if (!topics[topic]) return;

        setTimeout(() => {
            const handlers = topics[topic];
            if (!handlers) return;

            const toCall = Array.from(handlers);
            for (let i = 0; i < toCall.length; i++) {
                try {
                    toCall[i](payload);
                } catch (err) {
                    console.error('Handler error for topic', topic, err);
                }
            }
        }, delay);
    }

    return { on, off, emit };
}

// 1) Базова асинхронність

// const bus = createBus();
// bus.on('tick', (x) => console.log('tick:', x));
// bus.emit('tick', { step: 1 }, 0);
// console.log('after schedule');


// 2) Ланцюжок подій
// const bus = createBus();
// bus.on('tick', (x) => {
//   console.log('handler step:', x.step);
//   if (x.step === 1) {
//     bus.emit('tick', { step: 2 }, 0);
//   }
// });
// bus.emit('tick', { step: 1 }, 0);


// 3) Відписка
// const bus = createBus();
// const off = bus.on('news', (x) => {
//   console.log('news:', x);
//   off();
// });
// bus.emit('news', 'A', 0);
// bus.emit('news', 'B', 0);


// 4) Кілька підписників
// const bus = createBus();
// bus.on('ev', (v) => console.log('h1', v));
// bus.on('ev', (v) => console.log('h2', v));
// bus.on('ev', (v) => console.log('h3', v));
// bus.emit('ev', 42, 0);
