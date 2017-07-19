interface Animal {
    eat(): void;
    move(): void;
}

class Feline implements Animal {
    eat(): void {
        console.log("carnivore");
    }
    move(): void {
        console.log("daintily walking");
    }
}

class Bovine implements Animal {
    eat(): void {
        console.log("herbivore");
    }
    move(): void {
        console.log("lazily ambling");
    }
}

export type Constructor<T = {}> = new (...args: any[]) => T;

function Mooer<T extends Constructor>(Base: T) {
    return class extends Base {
        moo() {
            console.log("mooing");
        }
    }
}

function Roarer<T extends Constructor>(Base: T) {
    return class extends Base {
        roar() {
            console.log("roaring");
        }
    }
}

function Meower<T extends Constructor>(Base: T) {
    return class extends Base {
        meow() {
            console.log("meowing");
        }
    }
}

function Hunter<T extends Constructor>(Base: T) {
    return class extends Base {
        move() {
            console.log("slyly chasing");
        }
    }
}

const Cow = Mooer(Bovine);
const clarabelle = new Cow();
clarabelle.move();
clarabelle.moo();

console.log("=========");

const Cat = Meower(Feline);
const tom = new Cat();
tom.meow();
tom.move();

console.log("=========");

const Lion = Hunter(Roarer(Feline));
const simba = new Lion();
simba.roar();
simba.move();
