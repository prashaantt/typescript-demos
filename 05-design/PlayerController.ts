import { Controller, Serializable, Deserializable, StorageProvider, Player } from "./interfaces";

export class PlayerController implements Controller<Player>,
    Serializable<Player>,
    Deserializable<Player> {
    private storageProvider: StorageProvider;

    constructor(storageProvider: StorageProvider) {
        this.storageProvider = storageProvider;
    }

    create(object: Player): void {
        return this.storageProvider.save(object.id, this.serialize(object));
    }

    read(key: number): Player {
        try {
            return this.deserialize(this.storageProvider.get(key));
        } catch (e) {
            return {} as Player;
        }
    }

    update(key: number): void {
        throw new Error("Method not implemented.");
    }

    delete(key: number): void {
        return this.storageProvider.delete(key);
    }

    serialize(object: Player): string {
        throw new Error("Method not implemented.");
    }

    deserialize(json: string): Player {
        throw new Error("Method not implemented.");
    }
}
