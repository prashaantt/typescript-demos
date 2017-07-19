function check(arg?: string | string[] | null) {
    if (arg) {
        if (Array.isArray(arg)) {
            arg.join("");
        } else {
            arg.toUpperCase();
        }
    } else {
        arg
    }

    if (arg === null) {
        arg;
    } else {
        arg;
    }

    if (typeof arg === "undefined") {
        arg;
    } else {
        arg;
    }

    if (typeof arg === "object") {
        arg;
    } else {
        arg;
    }
}
