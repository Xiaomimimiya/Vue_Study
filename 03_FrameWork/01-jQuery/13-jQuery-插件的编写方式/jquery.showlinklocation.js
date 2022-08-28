// 立即执行函数

; (function () {
    // 在原型内设置插件
    $.fn.showLinkLocation = function () {

        // 过滤 只有a元素才行
        this.filter("a").each(function () {
            const $a = $(this)

            const link = $a.attr('href')
            
            $a.append(` ${link} `)
        })

        return this

    }

})(window, jQuery)