// 立即执行函数

; (function (g) {
    
    function Lodash(){

    }
    Lodash.VERSION = "12.32.12"

    const newArr = []
    const joinString = ""

    Lodash.join = function(arr, separater){
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            joinString = `${element}-${separater}`
        }
        return newArr
    }
    
    g._ = Lodash
})(window,Lodash)