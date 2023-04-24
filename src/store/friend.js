import { idListApi, ididApi } from "@/request/api/friend";
//token
// import token from "@/utils/index";
// import router from "@/router";
import { servece } from "@/request"; //用于获取服务端 ip端口
////图片
import img1 from "@/assets/img/head.jpg";
export const friend_modules = {
	//调用时给出需要的用户信息
	namespaced: true,
	state: {
		friendList: [
			{
				nickname: "管理员1",
				headimg: img1,
				id: "00100021",
			},
			{
				nickname: "管理员2",
				headimg: img1,
				id: "00100021",
			},
		],
	},
	getters: {},
	mutations: {
		//更新list 好友列表
		dataupList(stata, list) {
			console.log([servece.defaults.baseURL]);
			if (list.idlist) {
				console.log(list.idlist);
				list.idlist.forEach((emit, value) => {
					emit.headimg =
						servece.defaults.baseURL +
						"node/" +
						(emit.headimg == //三元
						"head.jpg"
							? emit.id + "/head.jpg"
							: "default.jpg");
				});
				stata.friendList = list.idlist;
				console.log("查询好友列表成功");
				console.log(stata.friendList);
				return "查询好友列表成功";
			} else {
				console.log("失败");
				//可以查询失败原因 重新post
				console.log(list);
			}
		},
	},
	actions: {
		//获取好友列表
		async idListAis(context) {
			// console.log(context.rootState.friend);
			let list = await idListApi({ id: context.rootState.user.id });
			console.log(list);
			context.commit("dataupList", list.data);
		},
		//添加好友
		async ididAis(context, ididObj) {
			let idid = await ididApi(ididObj);
			console.log(idid.data.message);
			return idid.data.message;
		},
	},
};
