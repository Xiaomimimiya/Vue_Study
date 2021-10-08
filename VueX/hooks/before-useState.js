// 没有封装前的使用方法

import { computed } from "@vue/reactivity";
import { mapState, useStore } from "vuex";

export function useState(mapper) {
    const store = useStore();
    // 获取对应functions
    const storeStateFns = mapState(mapper);
    // 数据转换
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnkey => {
        const fn = storeStateFns[fnkey].bind({ $store: store })
        storeState[fnkey] = computed(fn)
    })
    return storeState
}