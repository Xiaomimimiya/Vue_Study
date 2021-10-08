const HomeModule = {
        // 命名空间
        namespaced: true,

        state() {
            return {
                homeCounter: 100
            }
        },
        getters: {
            // 在Home.vue中调用 可以使用$state.getters.doubleHomeCounter
            doubleHomeCounter(state) {
                return state.homeCounter * 3
            }
        },
        mutations: {
            increase(state) {
                state.homeCounter++
            }
        },
        actions: {
            incrementAction(context) {
                context.commit("increase")
            }
        }
    }
    // 对象导出
export default HomeModule