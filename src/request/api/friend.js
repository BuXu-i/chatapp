import { servece } from "../index";

//获取好友列表
export const idListApi = (id) => {
    console.log("获取好友列表");
    return servece({
        method: "post",
        url: "/friend/idList",
        data: id,
    });
};
//添加好友
export const ididApi = (idid_) => {
    console.log("添加好友");
    return servece({
        method: "post",
        url: "/frind/idid",
        data: idid_,
    });
};