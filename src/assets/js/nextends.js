VueHtml5Plus.init({
    keyEventBind: {
        backbutton: true, //关闭back按键监听
    },
});
//首页返回键处理
// 处理逻辑： 1s内，连续两次按返回键，则退出应用；
var first = null;
VueHtml5Plus.back = function () {
    // 首次按键， 提示 再按一次退出应用
    if (!first) {
        first = new Date().getTime(); //记录第一次按下回退键的时间
        VueHtml5Plus.toast("再按一次退出应用");
        history.go(-1); // 回退到上一页
        setTimeout(function () {
            //1s 后清除
            first = null;
        }, 1000);
    } else {
        if (new Date().getTime() - first < 1000) {
            //如果两次按下的时间小于1s
            plus.runtime.quit(); //那么就退出app
        }
    }
};
