Vue.createApp({
    template: "#my-app",
    data() {
        return {
            books: [{
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },
                {
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 59.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2008-10',
                    price: 39.00,
                    count: 1
                },
                {
                    id: 4,
                    name: '《代码大全》',
                    date: '2006-3',
                    price: 128.00,
                    count: 1
                },
            ]
        }
    },
    computed: {
        Sum_price() {
            let totalprice = 0;
            for (let book of this.books) {
                totalprice += book.price * book.count;
            }
            return totalprice;
        },

    },
    methods: {
        increase(index) {
            // 通过索引值来获取到对象 对谁进行增加
            this.books[index].count++;
        },
        decrease(index) {
            // 通过索引值来获取到对象 对谁进行减少
            this.books[index].count--;
        },
        removeBook(index) {
            // splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目
            this.books.splice(index, 1);
        },
        // 为了加￥符号 使用新的方法来定义
        formatePrice(price) {
            return "￥" + price;
        }
    },

}).mount("#app");