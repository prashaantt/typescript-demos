import { IPlayer } from "../02. players/players";

export interface Controller<T> {
    create(object: T): void;
    read(key: number | string): T;
    update(key: number | string): void;
    delete(key: number | string): void;
}

export interface Serializable<T> {
    serialize(object: T): string;
}

export interface Deserializable<T> {
    deserialize(json: string): T;
}

export interface StorageProvider {
    save(key: number | string, value: string): void;
    get(key: number | string): string;
    update(object: any): void;
    delete(key: number | string): void;
}

export type Constructor<T = {}> = new (...args: any[]) => T;

interface Identifier {
    id: number;
}

export type PlayerWithId = IPlayer & Identifier;
