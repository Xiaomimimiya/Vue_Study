; (function (g) {

    // 构造函数
    function formate() {
        const date = new Date()

        this.day = date.getDate()
        this.month = date.getMonth() + 1
        this.year = date.getFullYear()

        return `${this.year}-${this.month}-${this.day}`
    }   

    // 在其原型上面进行定义
    formate.prototype.formate = function(){
        return `${this.year}-${this.month}-${this.day}`
    }

    // 工厂函数
    function formateDay() {
        return new formate()
    }

    // 导出函数
    g.formateDay = formateDay
})(window)