import { Constructor, Serializable, Deserializable } from "./interfaces";

export function Serializer<T extends Constructor, U>(Base: T) {
    return class extends Base implements Serializable<U> {
        serialize(object: U): string {
            return JSON.stringify(object);
        }
    }
}

export const Deserializer = <T extends Constructor, U>(Base: T) =>
    class extends Base implements Deserializable<U> {
        deserialize(json: string): U {
            return JSON.parse(json) as U;
        }
    }
