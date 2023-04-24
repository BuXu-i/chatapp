<template>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <!---路由出口  需要调用手机api 后期调式解开-->
    <!-- <ul class="mui-table-view">
        <li class="mui-table-view-cell" id="device.html" @click="getImage">
            <a class="mui-navigate-right">
                调用拍照
            </a>
        </li>
    </ul> -->

    <router-view />

</template>
<script>
export default {
    methods: {
        // 扩展API准备完成后要执行的操作
        plusReady() {
            var ws = plus.webview.currentWebview(); //pw回车可输出plus.webview
        },
    },
    created() {
        // 扩展API是否准备好，如果没有则监听“plusready"事件
        if (window.plus) {
            this.plusReady();
        } else {
            document.addEventListener("plusready", this.plusReady, false); //
        }
    },
    methods: {
        getImage() {
            let cmr = plus.camera.getCamera(); // 获取摄像头对象
            let res = cmr.supportedImageResolutions[0]; // 字符串数组，摄像头支持的拍照分辨率
            let fmt = cmr.supportedImageFormats[0]; // 字符串数组，摄像头支持的拍照文件格式
            console.log("Resolution :" + res + ", Format: " + fmt);
            cmr.captureImage(
                (path) => {
                    alert("调用成功: " + path);
                },
                (error) => {
                    // 拍照操作失败的回调函数
                    alert("调用失败: " + error.message);
                },
                { resolution: res, format: fmt } // 摄像头拍照参数
            );
        },
    },
};
</script>
<style lang="less" >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; //怪异盒子 不会撑开其他盒子
}
.icon {
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
a {
    color: #000;
}
li {
    list-style: none;
}
</style>
