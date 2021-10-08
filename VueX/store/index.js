import { createStore } from "vuex";
import HomeModule from "./modules/home";
import UserMoudle from "./modules/user"

const store = createStore({
    // 模块导入
    modules: {
        // Key-->value
        home: HomeModule,
        user: UserMoudle
    },
    // 可以外部导入模块 也可以拥有自己的相关属性
    state() {
        return {
            rootCounter: 9
        }
    },
    mutations: {
        increase(state) {
            state.rootCounter++
        }
    }
});

export default store