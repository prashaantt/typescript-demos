import { Deserializer, Serializer } from "./mixins";
import { PlayerController } from "./PlayerController";
import { StorageProvider } from "./interfaces";
// import { SessionStorageProvider } from "./SessionStorageProvider";
// import { MemoryStorageProvider } from "./MemoryStorageProvider";

export const SerializedPlayerController = Serializer(Deserializer(PlayerController));

// const getStorageProvider = (): StorageProvider => {
//     const test = "test";
//     try {
//         sessionStorage.setItem(test, test);
//         sessionStorage.removeItem(test);
//         return SessionStorageProvider.getInstance();
//     } catch (e) {
//         return MemoryStorageProvider.getInstance();
//     }
// }

// const playerController = new SerializedPlayerController(getStorageProvider());

// const tendulkar: PlayerWithId = {
//     id: Date.now(),
//     fname: "Sachin",
//     lname: "Tendulkar",
//     scores: [40, 80, 38, 143, 134],
//     birthday: new Date("1973-4-24")
// };

// playerController.create(tendulkar);

// console.log(playerController.read(tendulkar.id));

// playerController.delete(tendulkar.id);

// console.log(playerController.read(tendulkar.id));
