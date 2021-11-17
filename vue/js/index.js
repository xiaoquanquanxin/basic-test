function Vue({el, data}) {
    defineReactive(this, data);

    compiler(this, document.querySelector(el));
}
