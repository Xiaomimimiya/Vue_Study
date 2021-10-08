import { createStore } from "vuex";

const store = createStore({
    // 类似于data
    state() {
        return {
            // 可以在app.vue中进行调用 
            counter: 100,
            name: "xiaomi",
            age: 18,
            city: "gz",
            books: [
                { name: "深入Vuejs", price: 200, count: 3 },
                { name: "深入Webpack", price: 240, count: 5 },
                { name: "深入React", price: 130, count: 1 },
                { name: "深入Node", price: 220, count: 2 },
            ],
            discount: 0.7
        }
    },
    // 类似于methods
    mutations: {
        increase(state) {
            state.counter++
        },
        decrease(state) {
            state.counter--
        },
        // 10 --> payload
        increaseN(state, payload) {
            state.counter += payload
        }
    },
    // 类似于computed
    getters: {
        totalPrice(state, getters) {
            let totalprice = 0;
            for (const book of state.books) {
                totalprice += book.count * book.price;
            }
            // 可以在当前的函数中的 调用外部的函数
            // 直接使用函数的第二参数 getters
            return totalprice * getters.currentDiscount;
        },
        currentDiscount(state) {
            return state.discount = 0.6
        },
        nameInfo(state) {
            return `name:${state.name}`
        },
        ageInfo(state) {
            return `age:${state.age}`
        },
        cityInfo(state) {
            return `city:${state.city}`
        }
    },
    actions: {
        //放函数
        increaseAction(context) {
            context.commit("increase")
        },
        decreaseAction(context) {
            context.commit("decrease")
        }
    }

});

export default store