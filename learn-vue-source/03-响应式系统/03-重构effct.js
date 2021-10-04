class Dep {
    constructor() {
        this.subscribers = new Set();
    };
    depend() {
        if (activateEffect) {
            this.subscribers.add(activateEffect);
        }
    }
    notify() {
        this.subscribers.forEach(effect => {
            effect()
        })
    }
}

const dep = new Dep();

const info = { counter: 100 };

let activateEffect = null;

function watchEffect(effect) {
    activateEffect = effect
    dep.depend();
    effect()
    activateEffect = null;
}

watchEffect(function() {
    console.log(info.counter * 2);
})

watchEffect(function() {
    console.log(info.counter * info.counter);
})

info.counter++;
dep.notify();