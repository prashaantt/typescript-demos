/**
 * 1998 Sharjah Cup
 */

export interface Player {
    fname: string;
    lname: string;
    scores: (number | undefined)[];
    birthday?: Date | string;
};

const tendulkar: Player = {
    fname: "Sachin",
    lname: "Tendulkar",
    scores: [40, 80, 38, 143, 134],
    birthday: new Date("1973-4-24")
};

const ganguly: Player = {
    fname: "Sourav",
    lname: "Ganguly",
    scores: [105, 8, 31, 17, 23],
    birthday: "1972-7-8"
};

const kumble: Player = {
    fname: "Anil",
    lname: "Kumble",
    scores: [3, 14, 10, undefined, undefined]
}

const getFullName = (player: Player) => `${player.fname} ${player.lname}`;

const netScore = (player: Player) => player.scores.reduce((agg: number, score) => agg + (score ? score : 0), 0);

const ageOnMatchDay = (birthday: Date) => Math.floor((new Date("1998-4-24").getTime() - birthday.getTime())
    / (365 * 24 * 60 * 60 * 1000));

const getAge = (player: Player) => {
    if (typeof player.birthday === "string") {
        return ageOnMatchDay(new Date(player.birthday));
    } else if (player.birthday instanceof Date) {
        return ageOnMatchDay(player.birthday);
    }

    return "N/A";
}

const stats = (player: Player) => console.log(getFullName(player), `(${getAge(player)})`, netScore(player));

[tendulkar, ganguly, kumble].map(stats);
