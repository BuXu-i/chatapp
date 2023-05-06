import { servece } from "../index";

/**获取好友列表 */ 
export const idListApi = (id) => {
    console.log("获取好友列表");
    return servece({
        method: "post",
        url: "/friend/idList",
        data: id,
    });
};
/**添加好友 */
export const ididApi = (idid_) => {
    return servece({
        method: "post",
        url: "/friend/idid",
        data: idid_,
    });
};
/**删除好友 */
export const deleteIdApi = (idid_) => {
  return servece({
      method: "post",
      url: "/friend/deleteId",
      data: idid_,
  });
};

// /**删除好友 */
// export const deleteIdApi = (idid_) => {
//   return servece({
//       method: "post",
//       url: "/friend/deleteId",
//       data: idid_,
//   });
// };