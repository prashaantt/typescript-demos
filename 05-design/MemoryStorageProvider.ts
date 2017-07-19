import { StorageProvider } from "./interfaces";

let instance: MemoryStorageProvider;

export class MemoryStorageProvider implements StorageProvider {
    private storageMap: Map<number, string> = new Map();

    private constructor() { }

    static getInstance() {
        if (!instance) {
            instance = new MemoryStorageProvider();
        }

        return instance;
    }

    save(key: number, value: string): void {
        this.storageMap.set(key, value);
    }

    get(key: number): string {
        const item = this.storageMap.get(key);

        if (!item) {
            throw new Error("Item not found.");
        }

        return item;
    }

    update(object: any): void {
        throw new Error("Method not implemented.");
    }

    delete(key: number): void {
        this.storageMap.delete(key);
    }
}
