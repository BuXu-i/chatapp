<template>
    <div class="box">
        <img :src="img1" alt="" class="backg">
        <div class="boxList" is-link @click="showPopup()">
            <div class="p">
                <p>时间</p>
                <p>此刻你想说的话</p>
            </div>
            <div class="boxText">
                <p>我想说</p>
            </div>
        </div>
        <van-popup v-model:show="show" round position="bottom" duration=".35" :style="{ height: '100%' }">
            <PopupVue @showPopup="showPopup" />
        </van-popup>
    </div>
</template>

<script>
import img1 from "@/assets/img/head.jpg";
import PopupVue from "@/components/home/First/popup.vue";
import { ref } from "vue";
export default {
    data() {
        return {
            img1,
            show: ref(false),
        };
    },
    methods: {
        showPopup() {
            this.show = !this.show;
        },
    },
    components: {
        PopupVue,
    },
};
</script>

<style lang="less" scoped>
@boxshadow: 2rem;
.box {
    width: 100%;
    height: 12.3rem;
    display: flex;
    align-items: flex-end;
    /deep/ .van-overlay {
        background-color: rgb(255, 255, 255);
    }
    .backg {
        position: absolute;
        z-index: -999;
        top: 0;
        left: 0;
        width: 100%;
        height: 55%;
    }
    .boxList {
        // z-index: -1;
        width: 100%;
        // justify-content: ;
        align-items: stretch;
        height: 6.5rem;
        // overflow: scroll; //滑动时 需要特效
        // z-index: -20;
        .p {
            margin: 0 0 0.2rem 0.8rem;
            font: 700 0.35rem "宋体";
            // height: 3rem;
            // background: #fff;
        }
        //文字面板
        .boxText {
            width: 90%;
            background-color: rgb(255, 255, 255);
            height: 6rem;
            margin: 0 auto;
            border-radius: 1rem;
            padding: 0.4rem 0 0 0.4rem;
            box-shadow: 0 0 @boxshadow @boxshadow rgb(240, 240, 240);
            p {
                opacity: 0.7;
                font: 700 0.35rem "宋体";
            }
        }
    }
}
</style>