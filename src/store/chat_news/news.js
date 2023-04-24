//状态管理 模块 nuws
//导出该变量 用 {} 结构 接受
import { socket } from "@/sockter/io";
export const chat_news_modules = {
    namespaced: true,
    state: {
        ws: null, //有四个事件提供使用//webSocket.bufferedAmount 发送进度
        //　onmessage收到服务器响应时执行 //onerroe 出现异常时执行
        //　onopen 建立起连接时执行       //onclose 断开连接时执行
        newsList: {},
    },
    getters: {},
    mutations: {
        // 将消息push入消息列表 data 消息包
        updataStateMis(state, data) {
            console.log("接受消息被触发");
            console.log(state.newsList);
            let id = null;
            //收到的消息包 还是自身发出去的消息包
            if (data.id == undefined) {
                id = data.news.id;
            } else id = data.id;
            if (state.newsList[id] == undefined) {
                console.log("初次打印消息列表");
                state.newsList[id] = [];
            }
            state.newsList[id].push(data.news);
        },
    },
    actions: {
        // 建立WebSocket 建立连接 即是在服务端存储自己的接受函数 以id为唯一标志
        //online 连接事件
        onCreateAis(context) {
            //在Chat 路由中触发
            console.log("触发服务端 的建立连接的事件");
            console.log(this.state);
            console.log("连接者-登录者:" + this.state.user.id.toString()); //登录者
            socket.emit("online", {
                id: this.state.user.id.toString(),
            }); //服务端 一定有的事件 来记录登录 建立连接的人
            console.log("建立连接成功");
        },
        //自定义事件个人id  在进入app时（Chat路由时）就连接至服务器  接受服务器发来的私人消息 事件名为id  消息中包含 是群还是个人   是好友还是陌生人
        noNewsPrivateAis(context) {
            //创建只属于个人的消息接受  事件名this.context.id
            console.log("创建个人接受私人消息");
            console.log(this.state.user.id);
            socket.on(this.state.user.id + "", (data, fn) => {
                console.log(data);
                context.commit("updataStateMis", { news: data }); //修改消息队列
                fn({ state: true, massgin: "服务器已将消息转发????????????" });
            });
        },
        //固定事件 接受服务端发来的消息 事件名online
        onNewsAis(context) {
            return socket.on("online", (msg, fn) => {
                console.log("监听online返回的数据");
                console.log(msg); // world
                return msg;
            });
        },
        // 消息包
        // {
        // id:想要发送的对象
        // news:{
        //     time:时间戳
        //     id:发送者id
        //     value:发送内容
        //      }
        // }
        //向外 发送消息   给私人发送消息
        emitNewsAis(context, data) {
            // 发送数据   news 包含你要发送{ 对象id ,时间戳 }
            console.log("我在发送消息的函数中");
            console.log(data);
            socket.timeout(5000).emit(
                "private_chat", //触发事件
                data, //to 可以有福哦个参数 服务端响应的接受函数 有多个参数
                (err, response) => {
                    console.log("emitNewsMis完成后返回调用函数");
                    console.log(response); // ok
                    if (err) {
                        console.log("发送至服务器超时 回调返回的消息");
                        console.log(err);
                    } else {
                        console.log(
                            "发送至服务器成功 回调返回的消息 将发送的消息push进相应的消息数组"
                        );
                        console.log(response);
                        context.commit("updataStateMis", data); //修改消息队列
                    }
                }
            );
            return 0;
        },
        //发送群消息  给群发消息        发送对象不同 分开写 便于维护
        emitGroupAis(context, news) {
            // 发送数据   news 包含你要发送{ 群 的房间号 ,时间戳 }
            news.createTime = new Date().getTime(); //这里添加吧  毫秒
            console.log(news);
            socket.timeout(5000).emit(
                "group_chat", //触发事件 群事件
                //从服务端 获取好友列表时还需获取 加入的群 的信息
                news, //to 可以有多个参数 服务端响应的接受函数 有多个参数
                (err, response) => {
                    console.log("emitGroupMis完成后返回调用函数");
                    console.log(response); // ok
                    if (err) {
                        console.log("接受超时 回调返回的消息");
                        console.log(err);
                    } else {
                        console.log("接受成功 回调返回的消息");
                        console.log(response);
                    }
                }
            );
        },
    },
};
// export default news; //直接模块导出 创建变量接受
