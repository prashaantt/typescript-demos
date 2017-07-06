export class SimpleSet<T> {
    values: T[] = [];

    constructor(values?: T[]) {
        if (values) {
            values.forEach(this.addIfNotPresent);
        }
    }

    add(value: T) {
        this.addIfNotPresent(value);
    }

    size() {
        return this.values.length;
    }

    clear() {
        this.values = [];
    }

    delete(value: T) {
        const index = this.values.findIndex(v => v === value);
        if (index === -1) {
            return false;
        }

        this.values = this.values.slice(0, index).concat(this.values.slice(index + 1));
        return true;
    }

    private addIfNotPresent = (value: T) => {
        if (!this.values.includes(value)) {
            this.values.push(value);
        }
    }
}
