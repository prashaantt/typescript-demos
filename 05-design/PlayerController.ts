import { Controller, Serializable, Deserializable, StorageProvider, PlayerWithId } from "./interfaces";

export class PlayerController implements Controller<PlayerWithId>,
    Serializable<PlayerWithId>,
    Deserializable<PlayerWithId> {
    private storageProvider: StorageProvider;

    constructor(storageProvider: StorageProvider) {
        this.storageProvider = storageProvider;
    }

    create(object: PlayerWithId): void {
        return this.storageProvider.save(object.id, this.serialize(object));
    }

    read(key: number): PlayerWithId {
        try {
            return this.deserialize(this.storageProvider.get(key));
        } catch (e) {
            return {} as PlayerWithId;
        }
    }

    update(key: number): void {
        throw new Error("Method not implemented.");
    }

    delete(key: number): void {
        return this.storageProvider.delete(key);
    }

    serialize(object: PlayerWithId): string {
        throw new Error("Method not implemented.");
    }

    deserialize(json: string): PlayerWithId {
        throw new Error("Method not implemented.");
    }
}
