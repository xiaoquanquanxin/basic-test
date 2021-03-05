//  被观察者
class Observable {
    constructor(set){
        this.set = set;
    }

    subscribe(observer){
        this.set.add(observer);
    }

    unSubscribe(observable){
        this.set.delete(observable);
    }

    emit(...arg){
        const set = this.set.entries();
        for (const [key, value] of set) {
            value.next(...arg);
        }
    }
}

//  观察者对象
const observer1 = {
    next({name}){
        console.log('observer1', name);
    }
};
const observer2 = {
    next({name}){
        console.log('observer2', name);
    }
};

function ObservableGenerator(){
    return new Observable(new Set);
}

//  被观察者实例
const observable = new ObservableGenerator();
observable.subscribe(observer1);
observable.subscribe(observer2);
observable.emit({name: '1'});
observable.emit({name: '2'});
observable.unSubscribe(observer1);
observable.emit({name: '3'});


