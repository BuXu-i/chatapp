<template>
  <div>
    <!-- 消息展示 -->
    <div class="box">
      <ul>
        <li v-for="emit in newsList[id]"
            :key="emit.time"
            :class="emit.id==user.id?'kimi':''">
          <img :src="emit.id==user.id?user.headimg:idInfo.headimg"
               alt="">
          <div class="box-value">
            <span class="value">
              <!-- <span>{{emit.id==user.id?'':idInfo.nickname}}</span> -->
              <span>{{emit.value}}</span>
              <!-- <span>{{emit.time}}</span> -->
              <!-- 时间处理 -->
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      idInfo: null,
      // 消息包
      // {
      // id:想要发送的对象
      // news:{
      //     time:时间戳
      //     id:发送者id
      //     value:发送内容
      //      }
      // }
      historyNews: [
        //用户查看时从缓存中读取 反之静默 退出时 将现有消息记录 增添到缓存中
        {
          nickname: "管理员2",
          headig: null,
          news: "滚",
          time: null,
        },
      ],
    };
  },
  emits: ["backScrollbottom"],
  computed: {
    ...mapState("chat_news", ["newsList"]), //消息列表
    ...mapState("friend", ["friendList"]), //好友列表
    ...mapState(["user"]), //登录者个人信息
  },
  methods: {
    //
    ...mapActions("chat_news", ["onNewsAis"]), //固定接受服务端消息
  },
  beforeMount() {
    console.log("我是展示列表");
    console.log(this.friendList);
    //从好友列表中找到与该好友对话的个人信息
    this.friendList.some((item) => {
      console.log(item);
      if (this.id == item.id) {
        this.idInfo = item; //发送消息对象的个人信息
      }
    });
    if (this.idInfo == null) {
      alert("未添加该人为好友");
    }
  },
  updated() {
    //对方发送消息不滚动到底部 可以识别newslist 被更新后 最后一条消息是谁的
    console.log("数据被改变");
    if (
      this.newsList[this.id][this.newsList[this.id].length - 1].id ==
      this.user.id
    ) {
      this.$emit("backScrollbottom");
    }
  },
};
</script>

<style lang="less" scoped>
.box {
  height: 90vh;
  .kimi {
    display: flex;
    // justify-content: flex-end;//弹性盒子在主轴上的对齐方式
    flex-direction: row-reverse; //子盒子逆顺序
    text-align: right; //子行内块靠右
    img {
      margin: 0 0.1rem;
    }
    .box-value {
      .value {
        text-align: left;
      }
    }
  }

  img {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    margin: 0 0.1rem;
    display: inline-block;
  }
  .box-value {
    width: 6rem;
    // background-color: red;
    display: inline-block;
    vertical-align: top;
    .value {
      // border: 0px solid #000;
      border-radius: 0.2rem;
      background-color: #22c55e;
      display: inline-block;
      padding: 0.15rem 0.09rem 0.1rem 0.09rem;
      margin-bottom: 0.1rem;
      word-break: break-all; //解决纯字母或者数字不换行的问题
    }
  }
}
</style>