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
        {
          time: 166598371107,
          id: 12314,
          text: "有一天，我在广场上一如既往的散步，突然，我看见有一个人往地上扔垃圾，大家觉得这是一件小事，可我却不这么认为，因为如果每个人都把看成小事，都扔一片垃圾，那么世界将会变成什么样子，我想到这里，二话不说，把垃圾捡起来扔进垃圾桶里。　　还有一次，我坐在广场上，他们在草地上玩，我看到小草已经弯下了“腰”，可能再也挺不直了，可小伙伴还在草地上玩闹嬉戏着，我就上前对他们说：“爱护花草，人人有责。”　　我们身边每天都发生上演着许多事情，我们要力所能及地去帮助它，使社会变得更加美好。",
          comment: null,
          img: [img1],
          is_private: null,
        },
      ], //模拟数据 //自己发布的内容
      otherList: [
        {
          time: 1665983714307,
          id: 345345,
          text: "只见大狗走了一会儿就不走了，然后竟然在地上大便了。大便后它就要走，但阿姨不让它走，让它在一旁坐着。只见阿姨弯下腰来，这时我想：阿姨不会是要用她的纤纤玉手去抓便便吧？正在想着，就看到阿姨从包里拿出一次性手套和纸巾，动作麻利地把便便包在纸巾中扔到了垃圾桶里，然后才牵着狗狗离开。　　我见过许多人在宠物大小便之后不管不顾就走了，而这位阿姨的举动竟出乎我意料之外。从阿姨包里装着一次性手套，就可以看出她不是第一次这么做，而是一直这么处理的！如果人人都能像这位阿姨一样注意爱护卫生，那我们的城市将更加美丽，地球也将更加美丽！　　我要为这位阿姨的行为点赞，也希望平时不注意环境卫生的人都能向她学习。我们一定要做到“保护环境，人人有责”、“保护环境，从我做起”",
          comment: null,
          img: [img1],
          is_private: null,
        },
        {
          time: 16659837146507,
          id: 546456,
          text: "人行街道上，许多人随地扔垃圾。大部分人肯定会这样想：随地扔点垃圾没什么大不了的，环卫工人一会儿就会来把我们扔的垃圾扫走。可你有没有想过，冬天里，许多环卫工人在我们还在被窝里贪睡时，他们就已经开始上班，辛苦打扫了；在我们还做着美梦的时候，他们就穿着单薄的衣服在寒风里受冻了。在这里，我想提醒大家：我们都不要乱扔垃圾，爱护环境从你我做起。　　小事在我们身边，无处不在。我们每个人只要努力把每一件小事做好，就会很成功。因为老师说过：“小事做好，也就成了大事。”",
          comment: null,
          img: [img1, img1],
          is_private: null,
        },
      ], //相关的发布内容//模拟数据 其他人发布 自己并有过交互的发布内容
    };
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
</style>