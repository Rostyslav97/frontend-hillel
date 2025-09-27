class Cat extends Animal {

    constructor(name, age, hasTail, isSterilized) {
        super(name, age, hasTail, isSterilized, 'cat')
    }

    hide() {
        if(this.speed > 0) {
            this.stop()
        }
        console.log('Cat is hidden')
    }


    getVoice() {
        return 'mau mau'
    }
}

const c = new Cat('Vova', 28, true, true)
c.run()
c.hide()
console.log(c)