let depId = 0;

function Dep() {
    this.taskSet = new Set();
    this.depId = depId++;
}

Dep.prototype.addTask = function (watcher) {
    watcher.depId = this.depId;
    this.taskSet.add(watcher);
}

Dep.prototype.notify = function (){
    for(let watcher of this.taskSet){
        watcher.update(this.depId);
    }
}
