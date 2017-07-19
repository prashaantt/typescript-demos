import { StorageProvider } from "./interfaces";

export class SessionStorageProvider implements StorageProvider {
    save(key: number, value: string): void {
        sessionStorage.setItem(key.toString(), value);
    }

    get(key: number): string {
        const item = sessionStorage.getItem(key.toString());

        if (!item) {
            throw new Error("Item not found.");
        }

        return item;
    }

    update(object: any): void {
        throw new Error("Method not implemented.");
    }

    delete(key: number): void {
        sessionStorage.removeItem(key.toString());
    }
}
