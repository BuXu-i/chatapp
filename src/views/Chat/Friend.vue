<template>
    <div>
        <!-- 提示： 以下组件 只是更换聊天页面的中间的内容 -->
        <div class="box" ref="srl">
            <friendVue @backScrollbottom='backScrollbottom' />
        </div>
    </div>
</template>

<script>
import friendVue from "@/components/chat/friend.vue";
export default {
    //首页
    components: {
        friendVue,
    },
    beforeUpdate() {
        console.log("数据改变");
    },
    methods: {
        //回到滚动条底部
        backScrollbottom() {
            this.$refs.srl.scrollTop = this.$refs.srl.scrollHeight;
        },
    },
};
</script>

<style lang="less" scoped>
//样式穿透个球  同名的太多了。。。。。。。 子组件基于父组件大小
.box {
    overflow: scroll;
}
</style>