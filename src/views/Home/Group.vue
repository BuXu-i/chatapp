<template>
    <div>
        <div class="box">
            <!-- 群的搜索 框 (总的来说不是依托创建房间 而是依托人群基础逼迫依托创建房间)-->
            <!-- 房间功能是依托群来建立 只有加入了群 才有资格加入群下房间 -->
            <!-- 群的列表 横向一字排开-->
            <!-- 点击后下方 出现群的进入端口聊天和在线人数 -->
            <!-- 相应展示群内创建的房间 -->
            <top_searchVue class="box1" />
            <group_listVue class="box2" />
            <chatVue class="box3" />
            <bottom_inputVue class="box4" />
        </div>
    </div>
</template>

<script>
import top_searchVue from "@/components/home/Group/top_search.vue";
import group_listVue from "@/components/home/Group/group_list.vue";
import chatVue from "@/components/home/Group/chat.vue";
import bottom_inputVue from "@/components/home/Group/bottom_input.vue";
export default {
    //首页
    components: {
        top_searchVue,
        group_listVue,
        chatVue,
        bottom_inputVue,
    },
};
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    height: 100vh;
    background-color: rgb(245, 245, 245);
    //共计92vh
    .box1 {
        height: 10vh;
    }
    .box2 {
        height: 15vh;
    }
    .box3 {
        height: 60vh;
    }
    .box4 {
        height: 7vh;
    }
}
</style>