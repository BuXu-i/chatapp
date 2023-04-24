import { createStore } from "vuex";
//状态管理 modules
import { chat_news_modules } from "./chat_news/news";
import { login_modules } from "./login";
import { friend_modules } from "./friend.js";
//图片
import img1 from "@/assets/img/head.jpg";

export default createStore({
    state: {
        user: {
            id: "00100011",
            nickname: "ねこちゃん",
            headimg: img1,
            constellation: "星座",
            replaceState: 10, //发布内容条数
            coordinate: "武汉", //坐标
            sex: 0,
            phone:1362586329
        },
        isLogin: 0,
    },
    getters: {},
    mutations: {},
    actions: {
        //注册
        //登录
        //获取用户个人信息
    },
    modules: {
        chat_news: chat_news_modules,
        login: login_modules,
        friend: friend_modules,
    },
});
