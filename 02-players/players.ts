/**
 * 1998 Sharjah Cup
 */

export interface Player {
    fname: string;
    lname: string;
    scores: number[];
    birthday: Date;
};

const tendulkar: Player = {
    fname: "Sachin",
    lname: "Tendulkar",
    scores: [40, 80, 38, 143, 134],
    birthday: new Date("1973-4-24")
};

const getFullName = (player: Player) => `${player.fname} ${player.lname}`;

const getNetScore = (player: Player) => player.scores.reduce((agg, score) => agg + score);

const ageOnMatchDay = (player: Player) => Math.floor((new Date("1998-4-24").getTime() - player.birthday.getTime())
    / (365 * 24 * 60 * 60 * 1000));

const stats = (player: Player) => console.log(getFullName(player), `(${ageOnMatchDay(player)})`, getNetScore(player));

stats(tendulkar);
