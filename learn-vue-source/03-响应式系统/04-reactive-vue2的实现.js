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
    Object.keys(raw).forEach(key => {
        const dep = getDep(raw, key);
        let value = raw[key];

        Object.defineProperty(raw, key, {
            get() {
                dep.depend();
                return value;
            },
            set(newValue) {
                if (value != newValue) {
                    value = newValue;
                    dep.notify();
                }
            }
        })
    })
    return raw
}

const info = reactive({
    counter: 100,
    name: "xiaomi-before"
});

const foo = reactive({
    heigth: 130
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
    console.log("effect-f00", foo.heigth);
})

info.counter++;
info.name = "xiaomi12";
foo.heigth = 200;