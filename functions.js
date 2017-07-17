const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const identityf = (arg) => () => arg;

const addf = (a) => (b) => a + b;

const liftf = (fn) => (a) => (b) => fn(a, b)

const liftfadd = liftf(add);

const curry = (fn, a) => (b) => fn(a, b);

const curry2 = (fn, a) => liftf(fn)(a)


// function curryf(func) {
//     const slice = Array.prototype.slice;
//     const args = slice.call(arguments, 1);
//     return function () {

//     }
// }

// const curryf = (fn) => (...args) => fn.call(null, ...args);

const curryf = (fn, ...a) => (...b) => fn(...a, ...b);

const inc = addf(1)

const inc1 = curry(add, 1)

const inc2 = liftf(add)(1)

const twice = (fn) => (a) => fn(a, a); // liftf(fn)(a)(a)

const reverse = (fn) => (...args) => fn(...args.reverse());

// console.log(reverse(sub)(3, 2));

const doubl = twice(add);
const square = twice(mul);

const composeu = (...fns) => (a) => fns.reduce((agg, fn) => fn(agg), a);

// console.log(composeu(doubl, square, doubl, square)(5));

// const composeb = (f, g) => (a, b, c) => g(f(a, b), c);

const composeb = (...fns) => (...args) => fns.reduce((agg, fn, i) => fn(agg, args[i + 1]), args[0])

// console.log(composeb(add, mul)(2, 3, 7))

const limit = (fn, t) => (a, b) => {
    if (t >= 1) {
        t -= 1;
        return fn(a, b);
    }

    return undefined;
}

const add_ltd = limit(add, 1);
// console.log(add_ltd(3, 4));
// console.log(add_ltd(3, 5));
// console.log(add_ltd(3, 6));

const from = (a) => () => a++;

// const index = from(0)

// console.log(index());
// console.log(index());
// console.log(index());

const to = (gen, a) => () => {
    const g = gen();
    if (g < a) {
        return g;
    }

    return undefined;
}

const indexTo = to(from(1), 4);
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());

// const fromTo = (from, to) => {
//     return () => {
//         if (from < to) {
//             return from++;
//         }

//         return undefined;
//     }
// }

const fromTo = (start, end) => to(from(start), end)

const index = fromTo(0, 3);
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());

const element = (arr, gen) => {
    if (gen === undefined) {
        gen = fromTo(0, arr.length);
    }
    return () => {
        const index = gen();
        if (index !== undefined) {
            return arr[index];
        }
    }
};

// const ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));

// console.log(ele());
// console.log(ele());
// console.log(ele());

const ele = element(['a', 'b', 'c', 'd'])

// console.log(ele());
// console.log(ele());
// console.log(ele());
// console.log(ele());
// console.log(ele());

let array = [];

const collect = (gen, arr) => () => {
    const index = gen();
    if (index !== undefined) {
        arr.push(index);
    }
    return index;
}

const col = collect(fromTo(0, 2), array);

// col();
// col();
// col();
// console.log(array);

const filter = (gen, pred) => () => {
    let value;
    while ((value = gen()) !== undefined) {
        if (pred(value)) {
            return value;
        }
    }
    return undefined;
    // do {
    //     value = gen();
    //     if (value === undefined) {
    //         return undefined;
    //     }
    // } while (!pred(value));

    // return value;
}

const fil = filter(fromTo(0, 5), (value) => value % 3 === 0);

// console.log(fil())
// console.log(fil())
// console.log(fil())

function test(a, b) {
    return a + b;
}

console.log(test.bind(null, 1)(5))
