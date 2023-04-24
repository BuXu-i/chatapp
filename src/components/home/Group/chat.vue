<template>
    <div>
        <div class="box">
            <div class="top">
                <Vue3Marquee v-if="title.length>9">{{title}}</Vue3Marquee>
                <p v-else>{{title}}</p>
            </div>
            <div class="news">
                <ul>
                    <li v-for="item in newsList" :key="item.time">
                        {{item.value}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee"; //走马灯导入
import "vue3-marquee/dist/style.css"; //走马灯CSS导入
export default {
    data() {
        return {
            groupInfo: {
                name: "分享好耳机",
                count: 89, //在线人数
                total: 105,
                greateId: "123",
                id: "0010012",
                label: "便宜",
                administrators: ["001", "002", "003"], //群友的详细信息
            },
            newsList: [
                //消息列表
                {
                    id: null,
                    value: null,
                    time: null,
                },
            ],
        };
    },
    components: {
        Vue3Marquee,
    },
    computed: {
        //测算标题长度
        title() {
            return (
                this.groupInfo.name +
                "(" +
                this.groupInfo.total +
                "/" +
                this.groupInfo.count +
                ")"
            );
        },
    },
};
</script>

<style lang="less"  scoped>
.box {
    height: 100%;

    .top {
        height: 13%;
        width: 9em; //最大显示长度
        margin: 0 auto;
    }
    .news {
        height: 87%;
        width: 92%;
        margin: 0 auto;
        border-radius: 20px;
        background-color: #fff;
    }
}
</style>