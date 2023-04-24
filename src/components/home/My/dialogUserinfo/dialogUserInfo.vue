<template>
  <div class="box">
    <van-row>
      <van-col span="1">
      </van-col>
      <van-col span="15">
        <van-icon name="arrow-left" />
      </van-col>
      <!-- <van-col span="4">
        <van-icon name="arrow-left" />
      </van-col> -->
    </van-row>
    <van-row>
      <van-col span="13"
               class="box1">
        头像
      </van-col>
      <van-col span="8">
        <img class="headimg"
             src="http://43.142.189.60:3006/public/img/head.57bcaeba.jpg"
             alt="">
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12"
               class="box1">
        昵称
      </van-col>
      <van-col span="8"
               class="nickname">管理员1
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12"
               class="box1">
        电话
      </van-col>
      <van-col span="8"
               class="nickname">28385231727
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12"
               class="box1">
        性别
      </van-col>
      <van-col span="8"
               class="nickname">男
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12"
               class="box1">
        已发布内容 <van-icon name="arrow" />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="22"
               class="box1">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="好友列表"
                             name="1">
            <van-row>
              <van-col span="19">
                小样
              </van-col>
              <van-col span="5">
                <van-button type="default"
                            size="mini">删除</van-button>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="19">
                管理员2
              </van-col>
              <van-col span="5">
                <van-button type="default"
                            size="mini">删除</van-button>
              </van-col>
            </van-row>
          </van-collapse-item>
        </van-collapse>
      </van-col>
    </van-row>
  </div>
</template>
<script>

export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  margin-top: 20px;
}
.box1 {
  margin-top: 20px;
  margin-left: 20px;
}
.headimg {
  width: 1.2rem;
  height: 1.2rem rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.1rem #fff;
  margin: 10px;
}
.nickname {
  overflow: hidden;
  margin-top: 20px;
  margin-left: 30px;
}
</style>