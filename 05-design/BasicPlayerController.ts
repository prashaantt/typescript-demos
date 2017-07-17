import { PlayerWithId } from "./interfaces";

class BasicPlayerController {
    create(player: PlayerWithId): void {
        sessionStorage.setItem(player.id.toString(), this.serialize(player));
    }

    read(id: number): PlayerWithId {
        const item = sessionStorage.getItem(id.toString());

        if (!item) {
            throw new Error("Item not found");
        }

        return this.deserialize(item);
    }

    delete(id: number): void {
        sessionStorage.removeItem(id.toString());
    }

    serialize(object: PlayerWithId) {
        return JSON.stringify(object);
    }

    deserialize(value: string) {
        return JSON.parse(value) as PlayerWithId;
    }
}
