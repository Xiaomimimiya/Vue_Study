// 这个函数的作用是将useState和useGetter两个函数进行封装
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

// 通过传入两个参数 来使mapFunction可以自定义
export function useMapper(mapper, mapFunction) {
    const store = useStore();
    // 获取对应functions
    const storeStateFns = mapFunction(mapper);
    // 数据转换
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnkey => {
        const fn = storeStateFns[fnkey].bind({ $store: store })
        storeState[fnkey] = computed(fn)
    })
    return storeState
}