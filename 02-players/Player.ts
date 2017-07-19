interface IPlayer {
    fname: string;
    lname: string;
    scores: (number | undefined)[];
    birthday?: Date | string;
};

class Player {
    private player: IPlayer;

    constructor(player: IPlayer) {
        this.player = player;
    }

    getStats() {
        console.log(this.getFullName(), `(${this.getAge()})`, this.netScore());
    }

    netScore() {
        return this.player.scores.reduce((sum: number, score) => sum + (score ? score : 0), 0);
    }

    getFullName() {
        return `${this.player.fname} ${this.player.lname}`;
    }

    getAge() {
        if (this.player.birthday instanceof Date) {
            return this.age(this.player.birthday);
        } else if (typeof this.player.birthday === "string") {
            return this.age(new Date(this.player.birthday));
        }

        return "N/A";
    }

    private age(birthdate: Date) {
        return Math.floor((new Date("1998-4-24").getTime() - birthdate.getTime())
            / (365 * 24 * 60 * 60 * 1000));
    }
}

const tendulkar = new Player({
    fname: "Sachin",
    lname: "Tendulkar",
    scores: [40, 80, 38, 143, 134],
    birthday: new Date("1973-4-24")
});

const ganguly = new Player({
    fname: "Sourav",
    lname: "Ganguly",
    scores: [105, 8, 31, 17, 23],
    birthday: "1972-7-8"
});

const kumble = new Player({
    fname: "Anil",
    lname: "Kumble",
    scores: [3, 14, 10, undefined, undefined]
});

// const player = new Player({});

[tendulkar, ganguly, kumble].map(player => player.getStats());
