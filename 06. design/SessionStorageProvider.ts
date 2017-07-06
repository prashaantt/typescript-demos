import { StorageProvider } from "./interfaces";

let instance: SessionStorageProvider;

export class SessionStorageProvider implements StorageProvider {
    private constructor() { }

    static getInstance() {
        if (!instance) {
            instance = new SessionStorageProvider();
        }

        return instance;
    }

    save(key: string | number, value: string): void {
        sessionStorage.setItem(key.toString(), value);
    }

    get(key: string | number): string {
        const item = sessionStorage.getItem(key.toString());

        if (!item) {
            throw new Error("Item not found.");
        }

        return item;
    }

    update(object: any): void {
        throw new Error("Method not implemented.");
    }

    delete(key: string | number): void {
        sessionStorage.removeItem(key.toString());
    }
}
