<template>
    <div>
        <!-- //顶部 头像昵称 -->
        <div class="box">
            <img :src=user.headimg class="head_img" />
            <span class="nickname">{{user.nickname}}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    data() {
        return {};
    },
    methods: {
        // ...mapMutations(""),
    },
    computed: {
        ...mapState(["user"]),
    },

    beforeMount() {
        // console.log(this.head_img);
    },
};
</script>

<style lang="less" scoped>
.box {
    // background-color: gray;
    padding: 0.2rem 0 0 0.2rem;

    .head_img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 0.02rem solid #000;
    }
    .nickname {
        color: #000;
        font: 600 0.38rem "宋体";
        display: inline-block;
        margin: 0 0 0.2rem 0.2rem;
        vertical-align: text-bottom; //行内块的对齐方式
    }
}
</style>