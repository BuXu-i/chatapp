import { loginApi, reguserApi, loginStateApi } from "@/request/api/login";
//token
import token from "@/utils/index";
import router from "@/router";
// import router from "@/router";
import { servece } from "@/request"; //用于获取服务端 ip端口
export const login_modules = {
    //调用时给出需要的用户信息
    namespaced: true,
    state: {},
    getters: {},
    mutations: {
        //登录成功 存储id 昵称 等传回的其他信息
        loginYesMis(state, msg) {
            console.log(msg);
            //录入登录者信息
            this.state.user.id = msg.id + "";
            this.state.user.nickname = msg.nickname;
            this.state.user.head_img =
                servece.defaults.baseURL + "node/" + msg.headimg;
            //将登录登录状态改变
            this.state.isLogin = true;
            // state.rootStata.is_loginvue = true;
        },
    },
    actions: {
        //进行登录请求 并重定向 给状态stata赋值 德
        async loginAis(context, user) {
            console.log("正在acs请求");
            let msg = await loginApi(user);
            //路由重定向\
            console.log(
                "我是store 中 login.js 存储token , 路由重定向中  在初始路由中 会优先检查token查看是否需要登录 "
            );
            console.log(msg);
            if (msg.data.state) {
                context.commit("loginYesMis", msg.data);
                token.setToken(msg.data.token);

                router.replace("home"); //重定向 登录成功后
            } else {
                alert(msg.data.message);
            }
        },
        //注册函数
        async reguserAis(context, user) {
            let msg = await reguserApi(user);
            console.log(msg);
            if (!msg.data.message.id) {
                alert("注册失败");
                return false;
            }
            msg = msg.data.message.id;
            alert("注册id为: " + msg);
            console.log(msg.data.message.id);
            return true;
        },
        //已经登录 token存在 检查token
        async loginStateAis(context, token) {
            // let token = token.getToken(); //报错？？
            if (!token) {
                //token未有缓存
                return false;
            }
            let msg = await loginStateApi(token);
            if (!msg.data.state) {
                alert("登录凭证过期,重新登录");
                // token.removeToken("token");
                // router.replace("/");
                return false; //在路由 '/' 中使用了此函数
            } else {
                //载入vuex状态
                console.log("修改前 可以这样修改");
                this.state.user.id = msg.data.user.id;
                this.state.user.nickname = msg.data.user.nickname;
                this.state.isLogin = true; //登录状态更改
                this.state.user.headimg =
                    servece.defaults.baseURL +
                    "node/" +
                    (msg.data.user.headimg == //三元
                    "head.jpg"
                        ? msg.data.user.id + "/head.jpg"
                        : "default.jpg");
                console.log("修改成功？");
                console.log(this.state);
                return true;
            }
        },
    },
};
