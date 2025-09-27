class Dog extends Animal {
    constructor(name, age, hasTail, isSterilized) {
        super(name, age, hasTail, isSterilized, 'dog');
    }

    fancyJump() {
        if(this.speed === 0) {
            this.run();
        }

        console.log('Jumping fancy jumps');

        this.stop()
    }

    getVoice() {
        return  'Gav gav'
    }
}

const d = new Dog('Vova', 28, true, true)

d.fancyJump();

console.log(d)