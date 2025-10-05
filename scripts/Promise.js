class MPromise {
    static #states = {
        pending: 'pending',
        fulfilled: 'fulfilled',
        rejected: 'rejected'
    }

    #state = MPromise.#states.pending;
    #result = null;
    #thenCallbackQueue = [];

    constructor(callback) {
        callback(this.resolve, this.reject)
        console.log(this.#state)
    }

    resolve = (data) => {
        this.#state = MPromise.#states.fulfilled;
        this.#result = data;
        this.#handleThenQueue(this.#result);
    }
    reject = (reason) => {
        this.#state = MPromise.#states.rejected;
        this.#result = reason
    }


    #handleThenQueue(data, index = 0) {

        this.#thenCallbackQueue[index](data)
            .then((data) => {
                this.#handleThenQueue(data, ++index)
            })
    }

    then(callback) {
        const callbackWrapper = (...args) => {

            const result = callback(...args);
            console.log('callbackWrapper', result)

            if(result instanceof MPromise) {
                return result
            }


            this.#result = result;
            return this;
            // return new MPromise((resolve) => {
            //     resolve(result)
            // })

        }

        this.#thenCallbackQueue.push(callbackWrapper)
        return this;
    }

}

const a = new MPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
})

a
    .then((data) => {
        console.log('first', data)
        return 'Hello world'
    })
    .then((data) => {
        console.log('second', data)
    })

// console.log(a)