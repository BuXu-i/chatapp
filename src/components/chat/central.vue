<template>
    <!-- 聊天的公共 发送消息部分 -->
    <div>
        <div class="box">
            <div class="box-input">
                <input type="text" placeholder="发送消息" ref="news_input" @keyup.enter="emitNews(this.$refs.news_input.value)">
            </div>
            <div class="box-span">
                <span class="send" @click="emitNews(this.$refs.news_input.value)">发送</span>
            </div>
            <!-- <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhinan"></use>
            </svg> -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
            console.log(data);
            data = data.trim(); //消除前后空格
            console.log(data);
            if (data === "") {
                //空消息不发送
                return;
            }
            console.log(this.$route.params.id); //路由路径中的id
            if (
                this.emitNewsAis({
                    id: this.$route.params.id,
                    news: {
                        time: new Date().getTime(),
                        id: this.user.id,
                        value: data,
                    },
                }) != false
            ) {
                this.$refs.news_input.value = ""; //发送成功后消息删除
            } else {
                alert("发送失败"); //更改弹出错误样式
            }
        },
        //                             向外发送消息
        ...mapActions("chat_news", ["emitNewsAis"]),
    },
    computed: {
        ...mapState(["user"]),
    },
};
</script>

<style lang="less" scoped>
.box {
    // width: 100%;
    height: 1.2rem;
    background-color: rgb(187, 180, 180);
    // border-radius: 0.4rem;
    text-align: center;
    padding-top: 0.2rem;
    .box-input {
        display: inline-block;
        // padding-left: 0.001rem;
        height: 0.7rem;
        width: 80%;
        background-color: aliceblue;
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
            background-color: gray;
            border-radius: 0.4rem;
            padding: 0.05rem;
        }
    }
    .icon {
        vertical-align: text-bottom;
    }
}
</style>