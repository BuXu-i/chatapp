<template>
  <div>
    <div class="box">
      <router-view class="value" />
      <homeCentral class="homeCentral" />
    </div>
  </div>
</template>

<script>
//每个路由的公共组件 底部的导航栏
import homeCentral from "../components/home/homeCentral.vue";
// const Central = require("/components/chat/central.vue");
export default {
  // name: "HomeView",
  components: {
    homeCentral,
  },
  beforeMount() {
    console.log("改在底部组件");
    console.log(homeCentral);
  },
};
</script>
<style lang="less" scoped>
.value {
  height: 92vh;
}
.homeCentral {
  position: absolute;
  width: 100%;
  height: 8vh;
  bottom: 0;
  left: 0;
}
</style>
