
const App = {
    template: '#my-app',

    data() {
        return {
            data: [
                { id: 1, name: "《算法导论》", date: "2006-09", price: 98, number: 1 },
                { id: 2, name: "《天龙八部》", date: "2008-03", price: 80, number: 1 },
                { id: 3, name: "《大话西游》", date: "2009-02", price: 70, number: 1 },
                { id: 4, name: "《代码大全》", date: "2007-04", price: 60, number: 1 },
                { id: 5, name: "《编程艺术》", date: "2003-01", price: 50, number: 1 }
            ],
            currentIndex: -1
        }
    },
    methods: {
        sub(id) {
            this.data[id].number--
        },
        plus(id) {
            this.data[id].number++
        },
        remove(id) {
            // 从数组中进行删除
            this.data.splice(id, 1);
        },
        formatePrice(price) {
            // 格式化
            return "￥" + price
        },
        // 利用排他思想进行 点击颜色添加
        changeColor(index){
            console.log(index);
            this.currentIndex = index
            console.log(this.currentIndex);
        }
    },
    computed: {
        compute_price() {
            total = 0
            for (let index = 0; index < this.data.length; index++) {
                price = this.data[index].price * this.data[index].number
                total += price
            }
            return "￥" + total
        },

    }
}
Vue.createApp(App).mount("#app")
