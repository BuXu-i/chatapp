import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";
//token
import token from "@/utils/index";
//导入store的使用方式  this.$store.actions
import store from "../store/index";
const routes = [
    {
        path: "/",
        component: () => import("@/views/loginView.vue"),
        //设置路由导航守卫
        beforeEnter: (to, from, next) => {
            console.log("打印token");
            console.log(token.getToken());
            // to要去的页面 from从哪里来 next放行
            //已登录  存在token  检查token是否过期和获取token中携带的数据
            // console.log(store.dispatch("login/loginStateAis"));//报错
            //存在异步的问题  直接在回调函数 中进行  if选择
            store //vuex
                .dispatch("login/loginStateAis", token.getToken())
                .then((rse) => {
                    if (rse) {
                        //发出登录检测 token有效 继续反之 登录
                        console.log("存在token 缓存");
                        router.replace("/home");
                    } else {
                        //过期
                        token.removeToken("token");
                    }
                    next();
                });
        },
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/HomeView.vue"),
        redirect: "/home/first", //默认加载子路由
        children: [
            {
                path: "first",
                name: "first",

                component: () => import("@/views/Home/First.vue"),
            },
            {
                path: "friends_list",
                name: "friends_list",
                component: () => import("@/views/Home/Friends.vue"),
            },
            {
                path: "group",
                component: () => import("../views/Home/Group.vue"),
            },
            {
                path: "my",
                component: () => import("../views/Home/My.vue"),
            },
        ],
    },
    {
        path: "/chat",
        name: "chat",
        component: () => import("../views/ChatView.vue"),
        children: [
            {
                path: "first/id=:id(\\d+)", //好友的聊天界面
                component: () => import("../views/Chat/Friend.vue"),
            },
            {
                path: "group/:id(\\d+)", //群的聊天界面
                component: () => import("../views/Chat/Group.vue"),
            },
        ],
    },
    {
        //404 NotFound 未找到路由
        path: "/:path(.*)", //但找不到路由时 使用该路由  需要使用正则表达式  : 表示动态的  任何都可以匹配
        component: () => import("../views/NotFound.vue"),
    },
];
// 全局守卫

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from) => {
    // to要去的页面 from从哪里来 next放行
    console.log("在路由检查登录状态");
    console.log(store.state.isLogin);
    if (store.state.isLogin == 0 && to.path != "/") {
        console.log(from);
        console.log("path");
        router.replace("/");
    }
});
export default router;
