<template>
  <div>
    <div class="box">
      <div class="top">
        <svg class="icon rotate"
             aria-hidden="true"
             @click="this.$emit('showPopup')">
          <use xlink:href="#icon--fanhui"></use>
        </svg>
        <span class="topText"
              @click="submit">发布</span>
      </div>
      <div class="input">
        <textarea placeholder="我想说"
                  v-model="textarea"></textarea>
        <span class="add"
              v-if="isAdd">
          <svg class="icon "
               aria-hidden="true">
            <!-- 加号图标 -->
            <use xlink:href="#icon-tianjia"></use>
          </svg>
        </span>
      </div>
      <div class="central top">
        <span class="centralLeft">
          <svg class="icon "
               aria-hidden="true">
            <use xlink:href="#icon-xiangji"></use>
          </svg>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-tupian"></use>
          </svg>
        </span>
        <span class="centralText">他人可见</span>
      </div>
    </div>
  </div>
</template>

<script>
import token from "@/utils/index";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  emits: ["showPopup"], //弹窗返回
  data() {
    return {
      textarea: "",
      isAdd: false,
    };
  },
  methods: {
    submit() {
      console.log(this.textarea);
      if (!this.textarea) {
        alert("不能为空");
        return;
      }
      //存储
      token.setValue({
        time: new Date().getTime(),
        id: this.user.id,
        text: this.textarea,
        comment: null,
        img: [],
        is_private: null,
      });
      this.textarea = "";
      this.$emit("showPopup");
      alert("发布成功!");
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  opacity: 0.7;
  font: 700 0.35rem "宋体";
  padding: 0.2rem;
  background-color: rgba(240, 240, 240);
  height: 100vh;
  overflow: hidden;
  .top {
    height: 0.7rem;
    // line-height: 1rem;
    .icon {
      height: 0.62rem;
      width: 0.62rem;
    }
    .rotate {
      transform: rotate(90deg); //图标需要翻转一下
    }
    span {
      position: absolute;
      right: 0.2rem;
      padding: 0.11rem;
      border-radius: 0.25rem;
      background-color: rgb(190, 190, 190);
      // background-color: red;
    }
    .topText {
      top: 0.2rem; //定位微调
    }
  }

  .input {
    width: 92%;
    height: 100vh;
    margin: 0 auto;
    border-radius: 0.5rem;
    // visibility: collapse;
    textarea {
      border: 0;
      width: 100%;
      height: 100%;
      padding: 0.2rem;
      border-radius: 0.3rem;
    }
    .add {
      position: absolute;
      height: 1.8rem;
      width: 1.8rem;
      border: 0.02rem solid rgb(233, 233, 233);
      border-radius: 0.4rem;
      background-color: rgb(244, 244, 244);
      top: 2rem;
      left: 1rem;
      text-align: center;
      line-height: 1.8rem;
    }
  }
  //底部
  .central {
    height: 0.4rem;
    .centralLeft {
      left: 0.3rem;
      bottom: 0.2rem;
      background-color: rgba(0, 0, 0, 0);
    }
    .centralText {
      bottom: 0.2rem;
    }
  }
}
</style>