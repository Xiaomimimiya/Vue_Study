export const demoMixin = {
    data() {
        return {
            message: "hello demoMixin"
        }
    },
    methods: {
        foo() {
            console.log("hello Mixin foo")
        }
    },
    created() {
        console.log("执行了mixin")
    },
}