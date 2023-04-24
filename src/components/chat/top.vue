<template>
  <div>
    <div class="box">'
      <img :src="user.headimg"
           alt=""
           class="head_img">
      <span class="nickname">{{user.nickname}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    console.log([mapState]);
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  position: absolute;
  background-color: #6366f1;
  height: 10vh;
  top: 0;
  padding-top: 1vh;
  // .img {
  //     display: inline-block;
  // }
  z-index: 999; //消息过多覆盖top
  .head_img {
    width: 8vh;
    height: 8vh;
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