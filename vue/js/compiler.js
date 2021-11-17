function compiler(vm, el) {
    const div = el.querySelector('#div');
    const input = el.querySelector('#input');

    const msg = div.getAttribute('v-text');
    const parent = div.parentElement;

    const _div = document.createElement('div');
    const _input = document.createElement('input');

    parent.removeChild(div)
    parent.removeChild(input);

    parent.appendChild(_div)
    parent.appendChild(_input);


    function renderDiv(innerText) {
        console.log('值', innerText)
        console.log('渲染次数innerText')
        _div.innerText = innerText
    }

    function renderInput(value) {
        console.log('渲染次数value')
        _input.value = value;
    }

    new Watcher(vm, msg, renderDiv);
    new Watcher(vm, msg, renderInput);

    _input.oninput = function () {
        vm[msg] = this.value;
    }
}
