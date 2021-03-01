process.nextTick(() => {
    console.log(6, '同步process.nextTick是微任务里优先级最高的\nEvent Loop根本就不会继续进行，会马上停下来执行process.nextTick(), 3');
});

new Promise((resolve) => {
    console.log(7, '同步promise.fn，这是同步的 1');
    resolve();
}).then(() => {
    console.log(8, '同步promise.then  4');
});
console.log(1, '同步  2');
setTimeout(() => {
    console.log(2, '第一个宏任务里的同步  5');
    process.nextTick(() => {
        console.log(3, '第一个宏任务里的process.nextTick  7');
    });
    new Promise((resolve) => {
        console.log(4, '第一个宏任务里的promise.fn，这是同步的 6 ');
        resolve();
    }).then(() => {
        console.log(5, '第一个宏任务里的promise.then 8');
    });
});
