<template>
    <div>
        <div class="box">
            <topVue />
            <searchVue />
            <van-config-provider :theme-vars="themeVars" class="collapse">
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item title="发来的消息" name="1">
                        <news_listVue />
                    </van-collapse-item>
                    <van-collapse-item title="我的聊天对象" name="2">
                        <friends_listVue />
                    </van-collapse-item>
                    <!-- <van-collapse-item title="我加入的圈子" name="3"> -->
                    <!-- <reply_listVue /> -->
                    <!-- </van-collapse-item> -->
                </van-collapse>
            </van-config-provider>
        </div>
    </div>
</template>

<script>
import topVue from "@/components/home/Friends/top.vue";
import searchVue from "@/components/home/Friends/search.vue";
import friends_listVue from "@/components/home/Friends/friends_list.vue";
import news_listVue from "@/components/home/Friends/news_list.vue";
import reply_listVue from "@/components/home/Friends/reply_list.vue";
import { ref } from "vue";
export default {
    data() {
        return {
            activeName: ref("0"),
            themeVars: {
                collapseItemContentLineHeight: 1,
                // collapseItemContentBackgroundColor: "red", //列表背景
                // collapseItemTitleDisabledColor: "red",
                // collapseItemContentPadding: 1,//里面列表的
            },
        };
    },

    //首页
    components: {
        topVue,
        searchVue,
        friends_listVue,
        news_listVue,
        reply_listVue,
    },
};
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    height: 12.3rem;
    .van-config-provider {
        margin-top: 0.2rem;
        /deep/ .van-collapse {
            .van-collapse-item {
                .van-cell {
                    // margin-top: 0.2rem;
                    font-size: 0.32rem;
                    height: 0.7rem;
                    // padding: 0.rem 0.1rem 0.1rem 0;
                }
            }
        }
    }
}
</style>