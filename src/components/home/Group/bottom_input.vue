<template>
    <!-- 聊天的公共 发送消息部分 -->
    <div>
        <div class="box">
            <div class="box-input">
                <input type="text" placeholder="发送消息" ref="news_input" @keyup.enter="emitNews(this.$refs.news_input.value)">
            </div>
            <div class="box-span">
                <span class="send" @click="emitNews(this.$refs.news_input.value)">发送
                </span>
            </div>
            <!-- <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhinan"></use>
            </svg> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        //  {   消息模板
        //     id_: "00100031", //接受者的id
        //     news: {
        //         type: "string", //为以后做准备 可以发送语音消息等
        //         massgin: "消息将发往服务端并转发至id_=00100031",
        //     },
        // } //data 只给一个消息字符串
        emitNews(data) {
            console.log("准备发送消息");
        },
    },
    computed: {},
};
</script>

<style lang="less" scoped>
.box {
    // width: 100%;
    height: 1rem;
    // background-color: rgb(187, 180, 180);
    // border-radius: 0.4rem;
    text-align: center;
    padding-top: 0.2rem;
    .box-input {
        display: inline-block;
        // padding-left: 0.001rem;
        height: 0.6rem;
        width: 80%;
        background-color: #fff;
        border-radius: 0.3rem;
        input {
            outline: none;
            width: 90%;
            height: 100%;
            border: 0;
            vertical-align: text-top;
        }
    }
    .box-span {
        display: inline-block;
        height: 100%;
        padding-top: 0.12rem;
        vertical-align: text-top;
        .send {
            background-color: #fff;
            border-radius: 0.3rem;
            padding: 0.15rem;
        }
    }
    .icon {
        vertical-align: text-bottom;
    }
}
</style>