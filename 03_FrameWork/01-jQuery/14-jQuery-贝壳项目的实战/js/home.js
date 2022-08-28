$(function () {

    // 初始化 渲染界面
    initPage()



    // 获取元素
    let $SearchHomeInput = $(".header .house-search")
    let $SearchList = $(".header .search-list")
    let $SearchTips = $(".header .search-tips")
    let $SearchMenus = $(".header .search-menu >ul")
    let $SearchMenusArrow = $(".header .search-menu .arrow")

    let catchSearchData = []    //热门推荐数据缓存到数组中
    let searchPlaceHolder = "请输入区域、商圈或小区名开始"  // 搜索框内的文本
    let CurrentSelectBar = "site"

    // 获取焦点后 搜索结果栏显示 并开始进行数据的请求
    $SearchHomeInput.on("focus", function () {
        if (catchSearchData.length) {
            // 获取缓存的数据 直接渲染界面 不必发送下面的数据请求
            renderSearchList(catchSearchData)
            return
        }

        XMRequest.get(XMAPI.HOT_RECOMMEND).then(res => {

            // 数据获取
            let hot_rent_list = res.rent_house_list.list
            if (!hot_rent_list) {
                return
            }

            // 复杂数据进行映射为简单数组 防止内部过多数据
            hot_rent_list = hot_rent_list.map((item) => {
                return {
                    title: item.app_house_title
                }
            })

            // 请求优化之数据缓存 避免重复请求 减小服务器压力
            catchSearchData = hot_rent_list
            renderSearchList(catchSearchData)

        })

    })

    // 失去焦点后 搜索结果栏隐藏
    $SearchHomeInput.on("blur", function () {
        // 内容隐藏
        $SearchTips.css('display', 'none')
    })

    // 搜索栏 房子数据的搜索 显示结果
    $SearchHomeInput.on("input", debounce(function (res) {
        // 利用jQuery对象来获取输入的值
        let searchValue = $(this).val();
        XMRequest.get(XMAPI.HOME_SEARCH, {
            cityId: 440100,
            cityName: "广州",
            channel: CurrentSelectBar,
            keyword: searchValue,
            query: searchValue,
        }).then(res => {

            let search_result = res.data.result || [];

            // 复杂数据进行映射为简单数组 防止内部过多数据
            // 使其符合renderSearchList函数的需要
            search_result = search_result.map((item) => {
                return {
                    title: item.hlsText || item.text
                }
            })
            // 渲染列表
            renderSearchList(search_result)

        })
    }))

    // 搜索栏的切换功能实现  
    // 点击事件利用 再筛选 li
    $SearchMenus.on("click", "li", function () {

        // 1. 修改高亮
        const $clickItem = $(this)
        $clickItem.addClass("active").siblings().removeClass("active")

        // 2. 移动箭头位置修改
        const width = $clickItem.width()
        const position = $clickItem.position()  //position 属性是相对于其兄弟元素和父元素的位置
        // 2.1 计算偏移
        const arrowLeft = width / 2 + position["left"]
        // 2.2参数设置
        $SearchMenusArrow.css("left", arrowLeft)

        // 3. 修改placeholder的值
        $SearchHomeInput.prop({
            placeholder: searchPlaceHolder + $clickItem.text()
        })
        // 4.拿到li中绑定的key 为了在进行搜索时的参数可以进行动态设置 channel
        CurrentSelectBar = $clickItem.data("key")

    })

    // 渲染初始界面函数
    function initPage() {
        // 数据请求获取
        XMRequest.get(XMAPI.HOME_PAGE_INFO)
            .then(res => {
                // 1、渲染头部的地址
                renderHeaderAddress(res)

                // 2、渲染搜索栏
                renderSearchBar(res)
            })
    }
    // 渲染搜索栏的文本的数据绑定
    function renderSearchBar(res) {
        let searchDataBar = res.searchMenus || []
        let Html_String = ""
        searchDataBar.forEach(function (element, index) {

            let active = index === 0 ? "active" : ""

            Html_String += `<li class="item ${active} " data-key=${element.key}><span>${element.title}</span></li>`
        });
        $SearchMenus.empty().append(Html_String)

    }
    // 渲染热门搜索函数
    function renderSearchList(catchSearchData) {
        // 界面渲染
        let Html_String = `<li><span>热门房源</span></li>`
        catchSearchData.forEach(element => {
            Html_String += `<li><span>${element.title}</span></li>`
        });

        // 放到外部进行添加 
        // 防止重复添加 就在添加之前对其进行清空
        $SearchList.empty().append(Html_String)

        // 内容显示
        $SearchTips.css('display', 'block')
    }
    // 渲染头部的地址函数
    function renderHeaderAddress(res) {
        const $city = res.curLocation.city
        $(".address").text($city)
    }
})