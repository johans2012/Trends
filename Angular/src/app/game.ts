export class Game {

    counter: number;


    constructor() {
        this.counter = 0;
    }

    render() {

        while (true) {

            for (let index = 0; index < 10; index++) {

                this.counter = index;
                console.log(this.counter);
            }

            if (this.counter === 10) {
                this.counter = 0;
            }
        }
        return this.getCounter();
    }

    getCounter() {
        return this.counter;
    }
}
