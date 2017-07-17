import test = require("tape");

import { SimpleSet } from "./SimpleSet";

interface IEmployee {
    name: string;
    id: number;
}

test("SimpleSet", tape => {

    const john: IEmployee = {
        id: 1,
        name: "John Doe"
    }

    const jane: IEmployee = {
        id: 2,
        name: "Jane Doe"
    }

    tape.test("initialises correctly with no values", t => {
        const players = new SimpleSet();

        t.equal(players.size(), 0);

        t.end();
    });

    tape.test("initialises correctly and rejects duplicates", t => {
        const players = new SimpleSet<IEmployee>([john, john, jane, john, jane]);

        t.equal(players.size(), 2);

        t.end();
    });

    tape.test("rejects duplicates for new entries added", t => {
        const players = new SimpleSet<IEmployee>([john]);

        players.add(john);
        players.add(jane);

        t.equal(players.size(), 2);

        t.end();
    });

    tape.test("removes all values on clear", t => {
        const players = new SimpleSet<IEmployee>([john, jane]);

        players.clear();

        t.equal(players.size(), 0);

        t.end();
    });

    tape.test("returns false when trying to delete a non-existent value", t => {
        const players = new SimpleSet<IEmployee>([john]);

        const deleted = players.delete(jane);

        t.false(deleted);
        t.equal(players.size(), 1);

        t.end();
    });

    tape.test("removes a particular value on delete and returns true", t => {
        const players = new SimpleSet<IEmployee>([john, jane]);

        const deleted = players.delete(john);

        t.true(deleted);
        t.equal(players.size(), 1);

        t.end();
    });
});
