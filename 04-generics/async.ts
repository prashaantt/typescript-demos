const sleep = (duration: number) => new Promise(resolve => setTimeout(resolve, duration));

const test = async () => {
    console.log("Hello");
    await sleep(2000);
    console.log("world");
}

test();
