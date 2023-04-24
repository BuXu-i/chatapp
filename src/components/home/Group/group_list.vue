<template>
    <div>
        <div class="box">
            <ul class="groupList">
                <li v-for="item in groupList" :key="item.greateId" class="item">
                    <img :src="item.headimg" alt="">
                    <!-- 标题大于三个字符即 使用走马灯 -->
                    <span v-if="item.name.length>3">
                        <Vue3Marquee>{{item.name}}</Vue3Marquee>
                    </span>
                    <span v-else>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { img1 } from "@/assets/img";
import { Vue3Marquee } from "vue3-marquee"; //走马灯导入
import "vue3-marquee/dist/style.css"; //走马灯CSS导入
export default {
    data() {
        return {
            groupList: [
                {
                    greateId: "123",
                    id: "0010012",
                    name: "好耳机",
                    label: "便宜",
                    administrators: ["001", "002", "003"], //群友的详细信息
                    headimg: img1,
                },
                {
                    greateId: "456",
                    id: "0010013", //创建者id
                    name: "天天向上好快乐",
                    label: "学习", //群标签
                    administrators: ["003", "004", "002"], //群友的详细信息
                    headimg: img1,
                },
            ],
            id: 1234,
        };
    },
    mounted() {
        // let str = this.groupList[0].name;
        // console.log(str);
        // // str = str.toString();
        // console.log(str);
        // console.log(str.length);
        // console.log(this.groupList.name.toString().length);
    },
    components: {
        Vue3Marquee,
    },
};
</script>

<style lang="less"  scoped>
.box {
    .groupList {
        display: flex;
        padding: 7px;
        li {
            display: flex;
            flex-direction: column; //项目排列方式  从上往下排列
            align-items: center; //纵轴上 居中
            padding-right: 10px;
            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                box-shadow: 0px 0 0 0.05rem rgb(220, 220, 220);
            }
            span {
                width: 3em;
                color: rgba(0, 0, 0, 0.8);
            }
        }
    }
}
</style>