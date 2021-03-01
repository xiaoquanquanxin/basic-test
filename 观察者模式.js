function EventEmitter(){
    this.eventList = this.eventList || new Map();
}

EventEmitter.prototype.emit = function (event){
    const handle = this.eventList.get(event);
    if (!handle) {
        throw new Error('没有订阅 event');
    }
    return handle.call(this, ...[...arguments].slice(1));
};
EventEmitter.prototype.subscribe = function (event, fn){
    if (this.eventList.has(event)) {
        return;
    }
    this.eventList.set(event, fn);
};

const event1 = new EventEmitter();
const event2 = new EventEmitter();
console.log(event1);
console.log(event2);
//  订阅
event1.subscribe('up', (a, b, c,) => {
    console.log(a, b, c,);
    return 123;
});

event1.emit('up', 1, 2, 4);
event1.emit('up', 1, 2, 4);
const a = event1.emit('up', 1, 2, 4);
console.log(a);



