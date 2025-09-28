'use strict';

class ObjectTracker {
    constructor() {
        this.weakSet = new WeakSet();
    }

    mark(obj) {
        this.weakSet.add(obj);
    }

    wasProcessed(obj) {
        return this.weakSet.has(obj);
    }
}

const tracker = new ObjectTracker();
const obj = { name: "A" };

console.log(tracker.wasProcessed(obj));
tracker.mark(obj);
console.log(tracker.wasProcessed(obj));
