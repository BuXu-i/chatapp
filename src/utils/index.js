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
//格式
// time: 1665983714307,
// id: 123123123,
// text: "每天上",
// comment: null,
// img: [img1, img1],
// is_private: null,
//上传自己发布内容
const valKey = "value"; //key
function setValue(valObj) {
	//直接拼装数据
	let vlaue = getValue();
	if (!vlaue) {
		vlaue = [];
	}
	return localStorage.setItem(valKey, JSON.stringify([valObj, ...vlaue]));
}
// 获取自己发布内容
function getValue() {
	return JSON.parse(localStorage.getItem(valKey));
}
//移除自己发布内容
function removeValue(valObj) {
	return localStorage.removeItem(valKey);
}
export default token = {
	getToken,
	setToken,
	removeToken,
	setValue, //设置内容
	getValue, //获取内容
	removeValue, //删除内容
};
