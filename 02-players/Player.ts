import { IPlayer } from "./players";

class Player implements IPlayer {
    fname: string;
    birthday?: string;
    scores: (number | undefined)[];

    // constructor(player: IPlayer) {
    //     Object.assign(this, player);
    // }

    constructor(public lname: string) { }

    getStats() {
        console.log(this.fullName(), `(${this.getAge()})`, this.netScore());
    }

    netScore() {
        return this.scores.reduce((sum: number, score) => sum + (score ? score : 0), 0);
    }

    fullName() {
        return `${this.fname} ${this.lname}`;
    }

    getAge() {
        /*if (this.birthday instanceof Date) {
            return this.age(this.birthday);
        } else*/ if (typeof this.birthday === "string") {
            return this.age(new Date(this.birthday));
        }

                 return "N/A";
    }

    private age(birthdate: Date) {
        return Math.floor((new Date("1998-4-24").getTime() - birthdate.getTime())
            / (365 * 24 * 60 * 60 * 1000));
    }
}
