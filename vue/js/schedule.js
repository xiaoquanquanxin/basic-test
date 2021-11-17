const taskMap = new Map();

function schedule(depId, watcher) {
    if (taskMap.has(depId)) {
        taskMap.get(depId).add(watcher);
        return
    }
    taskMap.set(depId, new Set());
    taskMap.get(depId).add(watcher);
    nextTick(depId);
}

function nextTick(depId) {
    setTimeout(() => {
        const taskSet = taskMap.get(depId);
        console.log(taskSet);
        for (let watcher of taskSet) {
            watcher.render();
        }
        taskMap.delete(depId)
    })
}
