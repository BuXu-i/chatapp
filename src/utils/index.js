//装有名为 token 的变量 存储在cookie中
import Cookies from "js-cookie";
const TokenKey = "token";
const Dey = 7; //有效天数 客户端七天有效
//获取token
var token = null;
function getToken() {
    //在获取token时 检查有效时间 少于
    //退出时删除token ？ 改密时删除token？ 定时删除更新token
    return Cookies.get(TokenKey);
}
//设置token
function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: Dey });
}
//移除token
function removeToken() {
    return Cookies.remove(TokenKey);
}

export default token = {
    getToken,
    setToken,
    removeToken,
};
