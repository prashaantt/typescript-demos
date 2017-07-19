import { Player } from "./interfaces";

class BasicPlayerController {
    create(player: Player): void {
        sessionStorage.setItem(player.id.toString(), this.serialize(player));
    }

    read(id: number): Player {
        const item = sessionStorage.getItem(id.toString());

        if (!item) {
            throw new Error("Item not found");
        }

        return this.deserialize(item);
    }

    delete(id: number): void {
        sessionStorage.removeItem(id.toString());
    }

    serialize(object: Player) {
        return JSON.stringify(object);
    }

    deserialize(value: string) {
        return JSON.parse(value) as Player;
    }
}
