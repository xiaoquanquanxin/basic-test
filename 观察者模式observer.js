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
//  退订
EventEmitter.prototype.unSubscribe = function (event,){
    if (this.eventList.get(event)) {
        this.eventList.delete(event);
    }
};


const event1 = new EventEmitter();
console.log(event1);
//  订阅
event1.subscribe('up', function (a, b, c,){
    console.log(a, b, c,);
    console.log(this);
    return a + b + c;
});

event1.emit('up', 1, 2, 4);
event1.emit('up', 1, 2, 4);

//  退订
event1.unSubscribe('up');
//  没有订阅
event1.emit('up');
