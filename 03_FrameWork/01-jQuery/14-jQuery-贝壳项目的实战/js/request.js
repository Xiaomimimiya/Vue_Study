
; (function (window) {

    // 公共的数据请求
    function request(config = {}) {

        return $.ajax({
            url: config.url || "",
            method: config.method || "GET",
            timeout: config.timeout || 1000,
            data: config.data || {},
            headers: config.headers || "",
            // 展开运算符
            ...config 
        })
    }

    function get(url, data, config) {
        return request({
            url,
            method: "GET",
            data,
            ...config
        })
    }

    function post(url, data, config) {
        return request({
            url,
            method: "POST",
            data,
            ...config
        })

    }

    // 在window上面自定义
    window.XMRequest = {
        request,
        get,
        post
    }

})(window, jQuery)