// 没有封装前的使用方法

import { computed } from "@vue/reactivity";
import { mapGetters, useStore } from "vuex";

export function useGetters(mapper) {
    const store = useStore();
    // 获取对应functions
    const storeStateFns = mapGetters(mapper);
    // 数据转换
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnkey => {
        const fn = storeStateFns[fnkey].bind({ $store: store })
        storeState[fnkey] = computed(fn)
    })
    return storeState
}