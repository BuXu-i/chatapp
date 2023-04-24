<template>
    <!-- 好友列表  未查看的消息 点击后会进入响应的聊天页面-->
    <div>
        <div class="box">
            <div>
                <ul>
                    <li v-for="item in friendList" :key="item.nickname">
                        <img :src="item.headimg" alt="">
                        <span>{{item.nickname}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            //昵称 头像
        };
    },
    methods: {
        ...mapActions("friend", ["idListAis", "ididAis"]),
    },
    computed: {
        ...mapState("friend", ["friendList"]), //好友列表
    },
    created() {},
};
</script>

<style lang="less" scoped>
.box {
    margin: 0.2rem 0 0 0.2rem;
    // text-align: center;
    span {
        display: inline-block;
        vertical-align: text-bottom;
        font: 800 0.38rem "宋体";
        margin-bottom: 0.25rem;
    }
    img {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
    }
}
</style>