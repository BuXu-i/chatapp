<template>
  <div>
    <div class="box"
         @click="showPopup">
      <img :src="img1"
           class="back">
      <div class="user">
        <div class="headimg">
          <img :src="user.headimg">
          <svg class="icon sex"
               aria-hidden="true">
            <use xlink:href="#icon-xingbienan"
                 v-if="user.sex"></use>
            <use xlink:href="#icon-xingbienv"
                 v-else></use>
          </svg>
        </div>
        <div class="info">
          <span>{{user.nickname}}</span>
          <span>{{user.coordinate}}·{{user.constellation}}·{{user.replaceState}}</span>
        </div>
      </div>
    </div>
    <!-- 右侧弹出 -->
    <van-popup v-model:show="show"
               position="right"
               :style="{ width: '100%', height: '100%' }">
      <dialogUserInfoVue :user='user'
                         @closeIsShow="showPopup" />
    </van-popup>
  </div>
</template>

<script>
import img1 from "@/assets/img/news.jpg";
import dialogUserInfoVue from "./dialogUserinfo/dialogUserInfo.vue";
import { mapState } from "vuex";
import { ref } from "vue";
export default {
  components: {
    dialogUserInfoVue,
  },
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = !show.value;
    };
    return {
      show,
      showPopup,
    };
  },
  data() {
    return {
      img1,
    };
  },
  methods: {
    // clickIsShow() {
    //   this.isShow = !this.isShow;
    // },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="less" scoped>
.box {
  .back {
    //上传图片的时候 要进行以恶搞裁剪 保证图片的拉伸
    width: 100%;
    height: 45vh;
  }
  .user {
    position: relative;
    .headimg {
      position: absolute;
      top: -0.4rem;
      left: 50%;
      transform: translate(-50%, 0);
      img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        box-shadow: 0px 0 0 0.1rem #fff;
      }
      .sex {
        width: 0.44rem;
        height: 0.44rem;
        border-radius: 50%;
        transform: translate(-60%, -20%);
        // background-color: rgb(76, 91, 230);
        // box-shadow: 0px 0 0 2px rgb(69, 90, 247);
      }
    }
    .info {
      padding-top: 0.9rem;
      margin-right: 0.3rem;
      display: flex;
      flex-direction: column; //从主轴 从上到下
      align-items: center; //纵轴上居中
    }
  }
}
</style>