import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

// import plusExtends from "./assets/plusextends";
// App.prototype.plusExtends = plusExtends;
import vant from "./plugins/index";
const app = createApp(App);
//挂载html5plus
//阻止警告提示  开发环境下默认true即可
// app.config.productionTip = false;

app.config.productionTip = false;
app.use(vant); //挂载vant
//提示：在单个项目中不应该同时使用「全量引入」和「按需引入」，否则会导致代码重复、样式错乱等问题。
app.use(store);
app.use(router);
// main.js中引入'vue-awesome-mui'
// import Mui from "vue-awesome-mui";//手机api操作需要引入的nom包
// app.use(Mui);
app.mount("#app");
