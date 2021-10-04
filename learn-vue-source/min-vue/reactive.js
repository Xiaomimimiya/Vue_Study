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

let activateEffect = null;

function watchEffect(effect) {
    activateEffect = effect;
    effect();
    activateEffect = null;
}

const targetMap = new WeakMap();

function getDep(target, key) {
    // 根据对应的对象 取出对应的Map对象
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    // 取出Dep
    let dep = depsMap.get(key);
    if (!dep) {
        dep = new Dep();
        depsMap.set(key, dep);
    }
    return dep
}

// 对传入的数据进行劫持
function reactive(raw) {

    return new Proxy(raw, {
        get(target, key) {
            const dep = getDep(target, key);
            dep.depend();
            return target[key];
        },
        set(target, key, newValue) {
            const dep = getDep(target, key);
            target[key] = newValue;
            dep.notify();
        }
    });

}

const info = reactive({
    counter: 100,
    name: "xiaomi-before"
});

const foo = reactive({
    heigth: 100
});


// Effect1
watchEffect(function() {
        console.log("effect1", info.counter * 2);
    })
    // Effect2
watchEffect(function() {
        console.log("effect2", info.counter * info.counter);
    })
    // Effect3
watchEffect(function() {
    console.log("effect3", info.counter + 10, info.name);
})

watchEffect(function() {
    console.log("effect-foo", foo.heigth);
})

//调用后
info.name = "xiaomi12";
foo.heigth++;