<template>
    <div class="box">
        <userVue />
        <releaseValueVue />
    </div>
</template>

<script>
import userVue from "@/components/home/My/user.vue";
import releaseValueVue from "@/components/home/My/releaseValue.vue";
export default {
    //首页
    components: {
        userVue,
        releaseValueVue,
    },
};
</script>

<style lang="less" scoped>
.box {
    height: 100vh;
    overflow: scroll;
    // background-color: rgb(245, 245, 245);
}
</style>