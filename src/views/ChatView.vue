<template>
    <div>
        <topVue class="topVue" />
        <div class="flex">
            <router-view class="chat" /> <!-- 提示： 以下组件 只是更换聊天页面的中间的内容 -->
            <centralVue /> <!-- 发送消息的组件 -->
        </div>
    </div>
</template>

<script>
//每个路由的公共组件
//头部
import topVue from "@/components/chat/top.vue";
//底部
import centralVue from "@/components/chat/central.vue";
import { mapActions } from "vuex";

export default {
    // name: "HomeView",
    methods: {
        //建立连接 即是在服务端存储自己的接受函数 以id为唯一标志
        ...mapActions("chat_news", ["noNewsPrivateAis", "onCreateAis"]),
    },
    mounted() {
        this.onCreateAis(); //建立连接
        this.noNewsPrivateAis(); //创建 个人接受私人消息
    },
    components: {
        centralVue,
        topVue,
    },
};
</script>
<style lang="less" scoped>
.topVue {
    height: 12vh;
}
.flex {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column; //沿主轴方向从上到下
    align-items: stretch;
    margin-bottom: 0px;
    width: 100%;
    .chat {
        height: 78vh;
    }
}
</style>
