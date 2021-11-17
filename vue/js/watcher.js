function Watcher(vm, key, render) {
    Dep.target = this;
    this.vm = vm;
    this.key = key;
    this.depId = null;
    this.render = function () {
        render(this.value)
    }
    this.update(this.depId);
    Dep.target = null;
}

Watcher.prototype.get = function () {
    return this.vm[this.key];
}

Watcher.prototype.update = function (depId) {
    this.value = this.get();
    schedule(depId, this);
}
