import test = require("tape");
import { SerializedPlayerController } from "./Application";
import { StorageProvider, PlayerWithId } from "./interfaces";
import { SessionStorageProvider } from "./SessionStorageProvider";
import { MemoryStorageProvider } from "./MemoryStorageProvider";

const getStorageProvider = (): StorageProvider => {
    const test = "test";
    try {
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return SessionStorageProvider.getInstance();
    } catch (e) {
        return MemoryStorageProvider.getInstance();
    }
}

test("Application controller", tape => {

    tape.test("successfully creates a new record", t => {
        const playerController = new SerializedPlayerController(getStorageProvider());

        const tendulkar: PlayerWithId = {
            id: Date.now(),
            fname: "Sachin",
            lname: "Tendulkar",
            scores: [40, 80, 38, 143, 134],
            birthday: "1973-4-24"
        };

        playerController.create(tendulkar);
        t.deepLooseEqual(playerController.read(tendulkar.id), tendulkar);
        playerController.delete(tendulkar.id);
        t.deepEqual(playerController.read(tendulkar.id), {});
        t.end();
    });
});
