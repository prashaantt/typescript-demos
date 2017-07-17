export interface IPlayer {
    fname: string;
    lname: string;
    scores: (number | undefined)[];
    birthday?: string;
};

const tendulkar: IPlayer = {
    fname: "Sachin",
    lname: "Tendulkar",
    scores: [40, 80, 38, 143, 134],
    birthday: "1973-4-24"
};

const ganguly: IPlayer = {
    fname: "Sourav",
    lname: "Ganguly",
    scores: [105, 8, 31, 17, 23],
    birthday: "1972-7-8"
};

const kumble: IPlayer = {
    fname: "Anil",
    lname: "Kumble",
    scores: [3, 14, 10, undefined, undefined]
}

const fullName = (player: IPlayer) => `${player.fname} ${player.lname}`;

const netScore = (player: IPlayer) => player.scores.reduce((sum: number, score) => sum + (score ? score : 0), 0);

const age = (birthday: Date) => Math.floor((new Date("1998-4-24").getTime() - birthday.getTime())
    / (365 * 24 * 60 * 60 * 1000));

const getAge = (player: IPlayer) => {
    if (typeof player.birthday === "undefined") {
        return "N/A";
    } else if (typeof player.birthday === "string") {
        return age(new Date(player.birthday));
    }
}

const stats = (player: IPlayer) => console.log(fullName(player), `(${getAge(player)})`, netScore(player));

[tendulkar, ganguly, kumble].map(stats);
