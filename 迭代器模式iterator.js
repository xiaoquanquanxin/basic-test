const obj = {a: 1, b: 2};

function iteratorFn(obj){
    const keys = Reflect.ownKeys(obj);
    let index = 0;
    return {
        next(){
            if (keys.length > index) {
                return {value: obj[keys[index++]], done: false}
            }
            return {value: undefined, done: true}
        }
    }
}

const iterator = iteratorFn(obj);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

