<template>
  <div class="box">
    <!-- <van-icon name="arrow-left" /> -->
    <van-row>
      <van-col span="1">
      </van-col>
      <van-col span="15">
        <van-icon name="arrow-left"
                  @click="$emit('closeIsShow')" />
      </van-col>
      <!-- <van-col span="4">
        <van-icon name="arrow-left" />
      </van-col> -->
    </van-row>
    <van-row>
      <van-col span="2"
               class="box1">
        头像
      </van-col>
      <van-col span="8">
        <img class="headimg"
             :src="this.user.headimg">
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12"
               class="box1">
        昵称：{{this.user.nickname}}
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12"
               class="box1">
        电话：{{this.user.phone}}
      </van-col>

    </van-row>
    <van-row>
      <van-col span="12"
               class="box1">
        性别：{{ this.user.sex==0?'男':'女' }}
      </van-col>
    </van-row>
    <van-row>
      <van-col span="22"
               class="box1">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="好友列表"
                             name="1">
            <van-row v-for="item in friendList"
                     :key="item.id">
              <van-col span="19">
                {{ item.nickname }}
              </van-col>
              <van-col span="5">
                <van-button type="default"
                            size="mini"
                            @click="deleteIdAis(item.id)">删除</van-button>
              </van-col>
            </van-row>
          </van-collapse-item>
        </van-collapse>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["user"],
  data() {
    return {
      activeNames: ["1"],
    };
  },
  computed: {
    //friendList 好友列表
    ...mapState("friend", ["friendList"]),
  },
  methods: {
    ...mapActions("friend", ["deleteIdAis"]),
  },
  mounted() {
    console.log("创建组件时触发");
    console.log(this.user); //headimg  nickname sex
    console.log(this.user.coordinate);
  },
};
</script>
<style lang="less" scoped>
.box {
  margin-top: 20px;
  // height: 100%;
  .headimg {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    box-shadow: 0 0 0 0.1rem #fff;
    margin: 10px;
  }
}
.box1 {
  margin-top: 20px;
  margin-left: 20px;
}
.nickname {
  overflow: hidden;
  margin-top: 20px;
  margin-left: 30px;
}
</style>