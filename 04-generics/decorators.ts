import { Serializable, Constructor } from "../05-design/interfaces";
import { IPlayer } from "../02-players/players";

function Serializer<T extends Constructor>(Base: T) {
    return class extends Base {
        serialize(object: any) {
            return JSON.stringify(object);
        }
    }
}

class Test implements Serializable<IPlayer> {
    serialized: string;

    serialize(object: IPlayer): string {
        throw new Error("Method not implemented.");
    }

    constructor(player: IPlayer) {
        this.serialized = this.serialize(player);
    }
}

const Mixed = Serializer(Test);

const tendulkar: IPlayer = {
    fname: "Sachin",
    lname: "Tendulkar",
    scores: [40, 80, 38, 143, 134],
    birthday: "1973-4-24"
};

const test = new Mixed(tendulkar);

console.log(test.serialized);
