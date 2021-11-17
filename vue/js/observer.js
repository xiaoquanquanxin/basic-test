function defineReactive(vm, data) {
    vm.data = data;
    Object.keys(data).forEach(key => {
        let value = data[key];
        const dep = new Dep();
        Object.defineProperty(vm, key, {
            get() {
                if (Dep.target) {
                    dep.addTask(Dep.target);
                }
                return value;
            },
            set(v) {
                if (v === value) {
                    return;
                }
                value = v;
                dep.notify();
            }
        })
    })
}
