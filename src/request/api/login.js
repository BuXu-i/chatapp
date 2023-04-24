import { servece, request, response } from "../index";
export function loginApi(user) {
    console.log("api 发出登录请求 下面是传服务端数据");
    console.log({ ...user });
    return servece({
        method: "post",
        url: "/user/login",
        // headers: { "X-Custom-Header": user }, //密码和账户id
        // data: '{"id":"00100011","password": 00100011}',
        data: user,
    });
}
export function reguserApi(user) {
    console.log("注册请求 下面是传入请求数据");
    console.log(user);
    return servece({
        method: "post",
        url: "/user/reguser",
        data: user,
        // headers: { "X-Custom-Header": user }, //注册信息
    });
}
export function loginStateApi(token) {
    console.log("检查token");
    console.log(token);
    return servece({
        method: "get",
        url: "/user/loginState",
        headers: { Authorization: token }, //需要手动添加
    });
}
