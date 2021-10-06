import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

// import Home from "../pages/Home.vue"
// import About from '../pages/About.vue'
//懒加载需要将其注释 在component中进行配置

//路由配置 映射关系
const routes = [
    { path: "/", redirect: "/home" }, //默认路径访问和路由显示
    // 非懒加载的页面的配置方法
    // { path: "/home", component: Home }

    //懒加载页面的配置方法  并且自定义配置打包的名称:魔法注释 home-chunk
    {
        path: "/home",
        name: "home",
        component: () =>
            import ( /* webpackChunckName:"home-chunk"*/ "../pages/Home.vue"),

        // 配置home的嵌套组件 ===> 数组 多个匹配关系
        children: [{
                path: "", //默认显示message页面
                redirect: "/home/message",
            },

            {
                path: "message", //配置要注意 因为是自动属于home下的子路由  所以不需要/home 
                component: () =>
                    import ("../pages/HomeMessage.vue"),

                // 三级嵌套 也是在下面添加children 
            },
            {
                path: "product",
                component: () =>
                    import ("../pages/HomeProduct.vue"),
            },

        ]
    },

    // 非懒加载的页面的配置方法
    // { path: "/about", component: About }

    //懒加载页面的配置方法 并且自定义配置打包的名称:魔法注释 about-chunk
    {
        path: "/about",
        name: "about",
        component: () =>
            import ( /* webpackChunckName:"about-chunk"*/ "../pages/About.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../pages/login.vue")
    },

    {
        path: "/user/:usename/:id", //对路由进行动态配置 添加username 和id  可以动态获取到
        name: "xiaomi",
        component: () =>
            import ("../pages/User.vue")
    },
    {
        path: "/:pathMatch(.*)", //路径都匹配不到的配置
        name: "NotFound",
        component: () =>
            import ("../pages/NotFound.vue")
    },

];

//创建路由对象 router
const router = createRouter({
    // 导入创建的路由映射关系
    routes,
    history: createWebHistory(),
    // history: createWebHashHistory(),
})

// 动态添加一级路由
const categlory = {
        path: "/categlory",
        component: () =>
            import ("../pages/Categlory.vue")
    }
    // 将映射关系添加进去
router.addRoute(categlory);

// 动态添加二级路由
const homeMoment = {
        // 二级路由的path不要添加/
        path: "homemonent",
        component: () =>
            import ("../pages/HomeMoment.vue")
    }
    // 二级路由是在home下 所以有两个参数
router.addRoute("home", homeMoment);
// 删除路由
// router.removeRoute()

// 导航守卫 beforEach
// to：Route对象 即将跳转到的Route对象 
// from：Route对象 是从哪一个路由对象导航过来的
/**
 * 返回值问题:
 *    1.false: 不进行导航
 *    2.undefined或者不写返回值: 进行默认导航
 *    3.字符串: 路径, 跳转到对应的路径中
 *    4.对象: 类似于 router.push({path: "/login", query: ....})
 */
router.beforeEach((to, from) => {
    // console.log("路由跳转");
    // 在进入所有界面时 都需要进行登录
    if (to.path !== "/login") {
        // 获取本地存储中的数据 来进行判断 ===>login中添加的
        const token = window.localStorage.getItem("token");
        if (!token) {
            return "/login"
        }
    }
})


//导出路由对象
export default router