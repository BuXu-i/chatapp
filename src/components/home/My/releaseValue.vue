<template>
  <div>
    <div class="box">
      <div class="onOff">
        <!-- <van-switch v-model="checked" size="40px" active-color="#dcdee0" inactive-color="#dcdee0" /> -->
        <div class="befor"
             ref="left"
             @click="onOff"></div>
        <div class="after"
             @click="onOff"></div>
      </div>
      <!-- 动态 自己发布的动态 包含所有-->
      <div class="boxList list"
           v-show="is_onOff">
        <ul>
          <li v-for="item in myList"
              :key="item.time">
            <p class="time"> {{item.time}}</p>
            <!-- 评论 -->
            <p class="text">{{item.text}}</p>
            <template v-for="item in item.img"
                      :key="item">
              <img :src="item"
                   alt="">
            </template><br>
            <svg class="icon "
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan"></use>
            </svg>
            <svg class="icon "
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi"></use>
            </svg>
            <p v-if="item.is_private">好友可见</p>
            <p v-else>世界可见</p>
          </li>
        </ul>
      </div>
      <!-- 评论  我 有过交互的的其他人发布的内容-->
      <div class="boxList list"
           v-show="!is_onOff">
        <ul>
          <li v-for="item in otherList"
              :key="item.time">
            <p class="time"> {{item.time}}</p>
            <!-- 评论 -->
            <p class="text">{{item.text}}</p>
            <svg class="icon "
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan"></use>
            </svg>
            <svg class="icon "
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi"></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import img1 from "@/assets/img/head.jpg";
import token from "@/utils/index";
export default {
  data() {
    return {
      isShow: false,
      checked: 1,
      onOffTiem: null,
      left: 36,
      is_onOff: false,
      myList: [
        {
          time: 1665983714307,
          id: 123123123,
          text: "每天上下学经过学校门口小卖部的时候，几乎都能听到：“我要一袋功夫米线，我要一袋辣条……”吃完后，包装袋却满地乱扔。　　今天我还亲眼目睹过这样场景：一个大哥哥一手拿着一袋辣条一手拿着一瓶可乐边走边吃。吃完了正要扔袋子被一位环卫工大爷给拦住了说：“小同学吃完后请把袋子扔进垃圾箱好吗。”那位大哥哥却说：“我就不听你的，你能把我怎么样？”说完把袋子扔到地上便跑了。　　东胜是我家，卫生需要人人抓。虽然是一件小事，但我们要爱护环境从我做起。",
          comment: null,
          img: [img1, img1],
          is_private: null,
        },
        {
          time: 166598371107,
          id: 12314,
          text: "周末，我和妈妈要回老家。因为怕人多，车子忙，所以我们便早早的去站台等车。由于去的太早了，公交车迟迟没有出现，可是排队的人却越来越多，我们等啊等。终于看见一辆公交车缓慢地向我们行驶而来，车子刚稳稳地停下。我们正要排队上车，这时突然出现一位大叔叔，只见他挤向队伍的前面，抢先一步登上了公交车。这时候排在队伍里老奶奶便说：“这位年轻人，我们都在遵守规则。在依次的排队，您的这种插队行为是不对的。”如果大家都像你这样，不遵守规则，那这个世界岂不是都乱套了。那位叔叔听了老奶奶的话，觉得不好意思，低下了头，走到了队伍的后面重新排队，大家都纷纷竖起大拇指为这位老奶奶点赞。",
          comment: null,
          img: [img1],
          is_private: null,
        },
      ], //模拟数据 //自己发布的内容
      //获取自己的id
      otherList: [], //相关的发布内容//模拟数据 其他人发布 自己并有过交互的发布内容
    };
  },
  mounted() {
    this.otherList = token.getValue();
    this.myList.push(...this.otherList);
  },
  methods: {
    //user 中 开关
    onOff() {
      this.is_onOff = !this.is_onOff; //判断方向
      clearInterval(this.onOffTiem);
      this.onOffTiem = setInterval(() => {
        if (this.is_onOff && this.left < 50) {
          //向右走
          this.left++;
          if (this.left == 50) {
            clearInterval(this.onOffTiem);
          }
        } else if (!this.is_onOff && this.left > 36) {
          //向左走
          this.left--;
          if (this.left == 36) {
            clearInterval(this.onOffTiem);
          }
        }
        this.$refs.left.style.left = this.left + "%";
      }, 20);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  .onOff {
    position: relative;
    transform: translate(-0.12rem, 0.12rem); //矫正
    .after {
      width: 2.12rem;
      height: 0.8rem;
      border-radius: 0.5rem;
      margin: 0 auto;
      background-color: rgb(229, 229, 229);
      padding-top: 0.2rem;
    }
    .after::before {
      content: "动态";
      position: relative;
      margin-left: 0.14rem;
    }
    .after::after {
      content: "喜欢";
      position: relative;
      margin-left: 0.54rem;
    }
    .befor {
      position: absolute;
      width: 1.06rem;
      height: 0.8rem;
      border-radius: 0.5rem;
      top: 0rem;
      left: 36%;
      background-color: rgb(255, 255, 255);
    }
  }
  .list {
    width: 92%;
    margin: 0.6rem auto 2rem auto;
    ul {
      li {
        p,
        svg,
        img {
          margin-bottom: 10px;
        }
        border-radius: 50px;
        background-color: #fff;
        margin-top: 30px;
        padding: 20px;
        .time {
          opacity: 0.7;
        }
        img {
          width: 70px;
          height: 70px;
          border-radius: 5px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>